type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
};

const fallbackRecipient = "omotayodamilare07@gmail.com";
const resendApiKey = (process.env.VITE_API_KEY ?? process.env.RESEND_API_KEY) as string | undefined;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function processContactEmailRequest(body: ContactRequestBody) {
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return {
      status: 400,
      body: { error: "Name, email, and message are required." },
    };
  }

  const apiKey = (resendApiKey ?? "").trim();
  if (!apiKey.startsWith("re_")) {
    return {
      status: 500,
      body: { error: "Resend API key looks invalid. Use the secret key from Resend, not the public key." },
    };
  }

  const to = fallbackRecipient;
  const from = "onboarding@resend.dev";

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Website Contact <${from}>`,
      to: [to],
      reply_to: email,
      subject: `New contact message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2 style="margin: 0 0 16px;">New contact message</h2>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin: 16px 0 8px;"><strong>Message:</strong></p>
          <div style="white-space: pre-wrap; background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 12px;">${escapeHtml(message)}</div>
        </div>
      `,
    }),
  });

  const rawResponse = await resendResponse.text();
  let parsedResponse: { id?: string; error?: string; message?: string } | null = null;

  try {
    parsedResponse = rawResponse ? JSON.parse(rawResponse) : null;
  } catch {
    parsedResponse = null;
  }

  if (!resendResponse.ok) {
    return {
      status: resendResponse.status,
      body: {
        error:
          parsedResponse?.error ||
          parsedResponse?.message ||
          rawResponse ||
          "Failed to send email.",
      },
    };
  }

  return {
    status: 200,
    body: {
      message: "Email sent successfully.",
      id: parsedResponse?.id,
    },
  };
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const result = await processContactEmailRequest((req.body || {}) as ContactRequestBody);
  return res.status(result.status).json(result.body);
}
