# Two Idiots in Love 🌙

A responsive anniversary website for Prithika and Daiwik.

## Files
- `index.html` — the page and story
- `style.css` — responsive design and animations
- `script.js` — interactive reasons, quiz, navigation, and hidden messages
- `assets/` — the supplied couple photos

## Set up Prithi’s dream form (one-time setup)

The dream form now uses **Formspree** instead of FormSubmit. Formspree gives your form a unique endpoint, so you need to create the form once and paste its ID into the website.

1. Sign in to or create an account at [Formspree](https://formspree.io/).
2. Create a new form and set the notification/recipient email to `daiwik.j.s.2024@gmail.com`.
3. Verify that email address if Formspree asks you to.
4. Formspree will give you an endpoint that looks like `https://formspree.io/f/xxxxxxxx`. Copy the part after `/f/` (the form ID).
5. Open `index.html` and find this line in the dream form:
   ```html
   <form id="dreamForm" class="dream-form" action="https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID" method="POST">
   ```
6. Replace `REPLACE_WITH_YOUR_FORM_ID` with your actual form ID. Do not remove `/f/`.
7. Save `index.html`, upload the updated file to the root of your GitHub repository, and wait for GitHub Pages to redeploy.
8. Test the form using your live GitHub Pages URL. The first test may ask you to confirm the form/email in Formspree.

**Important:** The form will not send until you replace the placeholder with the real Formspree form ID and set the recipient email in your Formspree dashboard. Do not publish your Formspree account password or other login details in the website.

## Publish with GitHub Pages

1. Upload the contents of this folder to your repository root. Keep `index.html`, `style.css`, `script.js`, and `assets/` together.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then Save.
5. Wait for the Pages URL to appear in Settings → Pages.

No build step or framework is required. Google Fonts are used for typography; the page otherwise works as a static site.
