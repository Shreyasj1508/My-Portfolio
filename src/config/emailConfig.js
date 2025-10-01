// EmailJS Configuration
// To set up EmailJS for your contact form:

// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - Sender's name
//    - {{from_email}} - Sender's email
//    - {{phone}} - Sender's phone
//    - {{message}} - Sender's message
//    - {{to_name}} - Your name (Shreyas Jaiswal)

// 4. Get your credentials:
//    - Public Key (from Account > API Keys)
//    - Service ID (from Email Services)
//    - Template ID (from Email Templates)

// 5. Replace the placeholders in Contact.tsx:
//    - YOUR_PUBLIC_KEY
//    - YOUR_SERVICE_ID  
//    - YOUR_TEMPLATE_ID

// Example template for EmailJS:
/*
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
*/

export const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
    SERVICE_ID: 'YOUR_SERVICE_ID',
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID'
};
