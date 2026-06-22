import express from "express";
import cors from "cors";

const app = express();

const allowedOrigins = [
  "https://ayush-portfolio-frontend.vercel.app", // ← update to your actual Vercel URL after first deploy
  "http://localhost:5173",                         // Vite dev server
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (Postman, curl, same-origin)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS blocked: ${origin}`));
      }
    },
  })
);

app.use(express.json());

const PORT = process.env.PORT || 5000;
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const TO_EMAIL = process.env.TO_EMAIL || "ayushtiwari2907@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL; // must be a verified sender in Brevo

app.get("/", (req, res) => {
  res.send("Portfolio contact backend is running.");
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are all required." });
    }

    if (!BREVO_API_KEY || !FROM_EMAIL) {
      console.error("Missing BREVO_API_KEY or FROM_EMAIL env vars");
      return res.status(500).json({ error: "Server is not configured correctly." });
    }

    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: "Portfolio Contact Form", email: FROM_EMAIL },
        to: [{ email: TO_EMAIL }],
        replyTo: { email, name },
        subject: `New project inquiry from ${name}`,
        htmlContent: `
          <div style="font-family: sans-serif; line-height: 1.6;">
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
          </div>
        `,
      }),
    });

    if (!brevoRes.ok) {
      const errText = await brevoRes.text();
      console.error("Brevo error:", brevoRes.status, errText);
      return res.status(502).json({ error: "Failed to send message. Please try again." });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

app.listen(PORT, () => {
  console.log(`Contact backend listening on port ${PORT}`);
});
