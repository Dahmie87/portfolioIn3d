export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactForm(formData: ContactFormData) {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    }),
  });

  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(responseText || `Request failed with status ${response.status}`);
  }

  return responseText;
}