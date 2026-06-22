# Portfolio Contact Backend

A tiny Express server with one route — `/api/contact` — that sends form submissions
through Brevo's transactional email API. Built to deploy on Render.

## Why this exists

Brevo's API key has to stay server-side; it can't be embedded in your React frontend
(anyone could open dev tools and steal it). This server is the thin layer in between.

## Local setup

```bash
npm install
cp .env.example .env
# fill in BREVO_API_KEY and FROM_EMAIL in .env
npm run dev
```

Test it:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

## Brevo setup (one-time)

1. Sign up / log into [Brevo](https://www.brevo.com).
2. Go to **SMTP & API → API Keys** → generate a new key. This is your `BREVO_API_KEY`.
3. Go to **Senders & IP → Senders** → add and verify the email address you want to
   send *from* (this becomes `FROM_EMAIL`). Brevo requires this verification step —
   you can't send from an unverified address.
4. `TO_EMAIL` is just your inbox — where you want form submissions delivered.

## Deploy to Render

1. Push this folder to a GitHub repo (can be its own repo, separate from the
   portfolio frontend repo).
2. On [Render](https://render.com) → **New → Web Service** → connect the repo.
3. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Add environment variables in Render's dashboard (under the service → Environment):
   - `BREVO_API_KEY`
   - `FROM_EMAIL`
   - `TO_EMAIL`
5. Deploy. Render gives you a URL like `https://your-service.onrender.com`.

## Connect it to the frontend

In the portfolio's `Contact.jsx`, point the form submission at:
```
https://your-service.onrender.com/api/contact
```
(Full integration code provided separately — see `Contact.jsx` changes.)

## Notes

- Render's free tier spins down when idle and takes a few seconds to wake up on the
  next request — the first form submission after inactivity may feel slow. This is
  normal on free tier, not a bug.
- CORS is wide open (`cors()` with no config) since this only serves one public form.
  If you want to lock it down to just your domain, change it to:
  ```js
  app.use(cors({ origin: "https://your-portfolio-domain.com" }));
  ```
