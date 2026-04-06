# Indigo Luna Mentorship Modules

Interactive training modules for new managers at Indigo Luna. Each module covers a core leadership topic and includes reading material, exercises, and a reflection form that submits responses via email.

## Structure

- **`module-1-leadership-vision.html`** — Standalone HTML module on Leadership, Vision & Goal Setting. Includes 7 sections, 22 reflection questions, localStorage auto-save, and form submission via Google Apps Script.
- **`styles.css`** — Shared stylesheet used across all module HTML files.
- **`deploy.sh`** — Script to deploy modules to Google Cloud Storage.

## Deployment

Modules are hosted on Google Cloud Storage and accessible via a public URL.

```bash
bash deploy.sh
```

Live URL: `https://storage.googleapis.com/indigo-luna-mentorship-program/module-1-leadership-vision.html`

## Email Integration

Form submissions are sent via Google Apps Script. Responses include the question title and answer for each field and are delivered to a designated email inbox.

## React App (optional)

A separate slide-based React/Vite app also exists in this repo.

**Prerequisites:** Node.js

1. `npm install`
2. `npm run dev`
