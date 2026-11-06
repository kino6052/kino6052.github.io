const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.esm.adrmIy16.js","assets/index.esm.rYSP1bcF.js"])))=>i.map(i=>d[i]);
import{i as e,n as t,t as n}from"./firebase.91t-qa3n.js";var r=`#version 300 es
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
}`,i=`#version 300 es
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
}`;function a(e,t,n){let r=e.createShader(t);if(!r)throw Error(`No shader`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw Error(e.getShaderInfoLog(r)??`Shader failed`);return r}function o(e){return()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296)}function s(e){let t=e.getContext(`webgl2`,{alpha:!0,antialias:!0,premultipliedAlpha:!0});if(!t)return;let n=t.createProgram();t.attachShader(n,a(t,t.VERTEX_SHADER,r)),t.attachShader(n,a(t,t.FRAGMENT_SHADER,i)),t.linkProgram(n),t.useProgram(n);let s=window.innerWidth<700?12:22,c=o(7),l=new Float32Array(s*8);for(let e=0;e<s;e++)l.set([c(),c(),.5+c(),c()*6.28,.22+c()*.5,.14+c()*.34,(c()-.5)*.9,c()],e*8);t.bindVertexArray(t.createVertexArray()),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),t.STATIC_DRAW);let u=t.getAttribLocation(n,`corner`);t.enableVertexAttribArray(u),t.vertexAttribPointer(u,2,t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,l,t.STATIC_DRAW);for(let[e,r]of[[`motion`,0],[`shape`,16]]){let i=t.getAttribLocation(n,e);t.enableVertexAttribArray(i),t.vertexAttribPointer(i,4,t.FLOAT,!1,32,r),t.vertexAttribDivisor(i,1)}t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.clearColor(0,0,0,0);let d=t.getUniformLocation(n,`time`),f=t.getUniformLocation(n,`resolution`),p=()=>{let n=Math.min(window.devicePixelRatio||1,1.5);e.width=Math.round(e.clientWidth*n),e.height=Math.round(e.clientHeight*n),t.viewport(0,0,e.width,e.height),t.uniform2f(f,e.width,e.height)},m=e=>{t.uniform1f(d,e),t.clear(t.COLOR_BUFFER_BIT),t.drawArraysInstanced(t.TRIANGLE_STRIP,0,4,s)},h=window.matchMedia(`(prefers-reduced-motion: reduce)`),g=0,_=0,v=e=>{g=requestAnimationFrame(v),e-_<33||(_=e,m(e/1e3))},y=()=>{cancelAnimationFrame(g),h.matches||document.hidden?m(40):g=requestAnimationFrame(v)};new ResizeObserver(()=>{p(),h.matches&&m(40)}).observe(e),document.addEventListener(`visibilitychange`,y),h.addEventListener(`change`,y),p(),y()}var c=document.querySelector(`#background`);if(c)try{s(c)}catch(e){console.warn(`Background disabled`,e)}async function l(){let{getAnalytics:t,isSupported:r}=await e(async()=>{let{getAnalytics:e,isSupported:t}=await import(`./index.esm.adrmIy16.js`);return{getAnalytics:e,isSupported:t}},__vite__mapDeps([0,1]));await r()&&t(await n())}t&&(window.requestIdleCallback??(e=>setTimeout(e,2e3)))(()=>void l());var u=document.documentElement;document.querySelector(`#theme`)?.addEventListener(`click`,()=>{let e=(u.dataset.theme?u.dataset.theme===`dark`:window.matchMedia(`(prefers-color-scheme: dark)`).matches)?`light`:`dark`;u.dataset.theme=e;try{localStorage.setItem(`theme`,e)}catch{}});