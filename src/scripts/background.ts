// Soft rectangles with gradients, drifting slowly up the page.
// All the motion happens on the GPU: the CPU only sends the time each frame.

const VERTEX = `#version 300 es
in vec2 corner;
in vec4 motion; // start x, start y, speed, phase
in vec4 shape;  // width, height, angle, colour pick

uniform float time;
uniform vec2 resolution;

out vec2 local;
out vec2 halfSize;
out float pick;

void main() {
  float unit = min(resolution.x, resolution.y);
  vec2 size = shape.xy * unit;
  float angle = shape.z + sin(time * 0.04 * motion.z + motion.w) * 0.3;
  float c = cos(angle);
  float s = sin(angle);

  float x = motion.x + sin(time * 0.05 * motion.z + motion.w) * 0.07;
  float y = fract(motion.y + time * 0.006 * motion.z) * 1.6 - 0.3;

  vec2 offset = corner * size * 0.5;
  vec2 turned = vec2(c * offset.x - s * offset.y, s * offset.x + c * offset.y);
  vec2 position = vec2(x, y) * resolution + turned;

  local = offset;
  halfSize = size * 0.5;
  pick = shape.w;
  gl_Position = vec4(position / resolution * 2.0 - 1.0, 0.0, 1.0);
}`;

const FRAGMENT = `#version 300 es
precision highp float;

in vec2 local;
in vec2 halfSize;
in float pick;

out vec4 colour;

const vec3 violet = vec3(0.49, 0.32, 0.90);
const vec3 magenta = vec3(0.90, 0.30, 0.68);
const vec3 blue = vec3(0.25, 0.48, 0.96);

void main() {
  float radius = min(halfSize.x, halfSize.y) * 0.16;
  vec2 q = abs(local) - halfSize + radius;
  float distanceToEdge = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - radius;

  float body = 1.0 - smoothstep(-1.5, 0.5, distanceToEdge);
  float rim = (1.0 - smoothstep(0.0, 1.5, abs(distanceToEdge + 1.0))) * 0.35;

  vec2 uv = local / halfSize * 0.5 + 0.5;
  float along = clamp((uv.x + uv.y) * 0.5, 0.0, 1.0);
  vec3 start = pick < 0.5 ? violet : magenta;
  vec3 end = pick < 0.5 ? blue : violet;
  vec3 tint = mix(start, end, along);

  float alpha = body * mix(0.03, 0.2, along) + rim * body * 0.4;
  colour = vec4(tint * alpha, alpha);
}`;

function compile(gl: WebGL2RenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("No shader");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) ?? "Shader failed");
  }
  return shader;
}

// A fixed seed keeps the layout the same on every visit.
function random(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
}

function start(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext("webgl2", { alpha: true, antialias: true, premultipliedAlpha: true });
  if (!gl) return;

  const program = gl.createProgram();
  gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERTEX));
  gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAGMENT));
  gl.linkProgram(program);
  gl.useProgram(program);

  const count = window.innerWidth < 700 ? 12 : 22;
  const next = random(7);
  const instances = new Float32Array(count * 8);
  for (let i = 0; i < count; i++) {
    instances.set(
      [
        next(), // start x
        next(), // start y
        0.5 + next(), // speed
        next() * 6.28, // phase
        0.22 + next() * 0.5, // width
        0.14 + next() * 0.34, // height
        (next() - 0.5) * 0.9, // angle
        next(), // colour pick
      ],
      i * 8,
    );
  }

  gl.bindVertexArray(gl.createVertexArray());

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const corner = gl.getAttribLocation(program, "corner");
  gl.enableVertexAttribArray(corner);
  gl.vertexAttribPointer(corner, 2, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, instances, gl.STATIC_DRAW);
  for (const [name, offset] of [["motion", 0], ["shape", 16]] as const) {
    const location = gl.getAttribLocation(program, name);
    gl.enableVertexAttribArray(location);
    gl.vertexAttribPointer(location, 4, gl.FLOAT, false, 32, offset);
    gl.vertexAttribDivisor(location, 1);
  }

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  gl.clearColor(0, 0, 0, 0);

  const time = gl.getUniformLocation(program, "time");
  const resolution = gl.getUniformLocation(program, "resolution");

  const resize = () => {
    const scale = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(canvas.clientWidth * scale);
    canvas.height = Math.round(canvas.clientHeight * scale);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(resolution, canvas.width, canvas.height);
  };

  const draw = (seconds: number) => {
    gl.uniform1f(time, seconds);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, count);
  };

  const still = window.matchMedia("(prefers-reduced-motion: reduce)");
  let frame = 0;
  let last = 0;

  const loop = (now: number) => {
    frame = requestAnimationFrame(loop);
    if (now - last < 33) return; // about 30 frames a second is plenty for slow drift
    last = now;
    draw(now / 1000);
  };

  const run = () => {
    cancelAnimationFrame(frame);
    if (still.matches || document.hidden) {
      draw(40);
    } else {
      frame = requestAnimationFrame(loop);
    }
  };

  new ResizeObserver(() => {
    resize();
    if (still.matches) draw(40);
  }).observe(canvas);

  document.addEventListener("visibilitychange", run);
  still.addEventListener("change", run);

  resize();
  run();
}

const canvas = document.querySelector<HTMLCanvasElement>("#background");
if (canvas) {
  try {
    start(canvas);
  } catch (error) {
    // The CSS gradient behind the canvas is a fine fallback.
    console.warn("Background disabled", error);
  }
}
