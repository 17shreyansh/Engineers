# Email System Setup for Hostinger

## Files Created:
1. `public/send-email.php` - PHP email handler
2. `public/.htaccess` - Server configuration
3. Updated `src/pages/Contact.jsx` - Form with email functionality

## Deployment Steps:

### 1. Build the React App
```bash
npm run build
```

### 2. Upload to Hostinger
- Upload all files from `dist/` folder to your `public_html` directory
- Make sure `send-email.php` is in the root of `public_html`
- Upload `.htaccess` file to `public_html`

### 3. Configure Email in Hostinger
- Go to Hostinger Control Panel → Email
- Verify that `info@singhrefrigerationeng.com` exists
- If not, create the email account

### 4. Test the Form
- Visit your website's contact page
- Fill out and submit the form
- Check `info@singhrefrigerationeng.com` for the email

## Email Configuration:
- **Admin Email**: info@singhrefrigerationeng.com
- **From**: User's email address
- **Reply-To**: User's email address

## Troubleshooting:
- If emails don't arrive, check Hostinger's spam folder
- Verify PHP mail() function is enabled in hosting
- Check error logs in Hostinger control panel
- Some shared hosts require SPF/DKIM records for reliable delivery

## Alternative (If mail() doesn't work):
If PHP mail() function is blocked, you can use SMTP with PHPMailer library.
