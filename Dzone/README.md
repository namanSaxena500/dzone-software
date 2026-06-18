# Dzone Next.js Landing Page

This project is a high-conversion, professional Next.js landing page built with React, featuring a responsive, modern design and an integrated contact form with backend email delivery.

## Key Features

- **Responsive Hero Section** with SVG illustrations and a call-to-action button.
- **Interactive Services Section** that switches between different services using a clean tab interface.
- **Interactive Portfolio Section** that showcases web and mobile project mockups.
- **Domain Expertise Section** showing industry reach and stats over a sleek dark background.
- **Contact Form** with real-time feedback, supporting name, company, email, phone number (with country code), service selection, and message.
- **Nodemailer Backend Integration**: Submitting the contact form emails the details to `digitalinfluencerns@gmail.com` using a secure SMTP server.

## Getting Started

1. Install the dependencies:
   ```bash
   npm install
   ```

2. Configure your SMTP mail server settings in `.env.local`. 
   For example, if you are using Gmail, obtain an **App Password** and configure as follows:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-specific-password
   RECEIVER_EMAIL=digitalinfluencerns@gmail.com
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the page.

5. To build for production:
   ```bash
   npm run build
   ```
