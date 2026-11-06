import { getApp, hasFirebase } from "../lib/firebase";

const form = document.querySelector<HTMLFormElement>("#contact-form");

async function save(fields: { name: string; email: string; message: string; language: string }) {
  const { addDoc, collection, getFirestore, serverTimestamp } = await import("firebase/firestore");
  const database = getFirestore(await getApp());
  await addDoc(collection(database, "messages"), { ...fields, createdAt: serverTimestamp() });
}

function openEmailDraft(address: string, name: string, message: string) {
  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(message);
  window.location.href = `mailto:${address}?subject=${subject}&body=${body}`;
}

if (form) {
  const status = form.querySelector<HTMLElement>("[data-status]")!;
  const button = form.querySelector<HTMLButtonElement>("button")!;
  const { language, address, sending, sent, failed } = form.dataset as Record<string, string>;
  const label = button.textContent;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    if (data.get("website")) return; // only bots fill in this hidden field

    const fields = {
      name: String(data.get("name")).trim(),
      email: String(data.get("email")).trim(),
      message: String(data.get("message")).trim(),
      language,
    };

    if (!hasFirebase) {
      openEmailDraft(address, fields.name, `${fields.message}\n\n${fields.email}`);
      return;
    }

    button.disabled = true;
    button.textContent = sending;
    status.textContent = "";

    try {
      await save(fields);
      form.reset();
      status.textContent = sent;
    } catch (error) {
      console.error(error);
      status.textContent = failed;
    } finally {
      button.disabled = false;
      button.textContent = label;
    }
  });
}
