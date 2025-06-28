export default ({ env }) => ({
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: env('SMTP_HOST', 'smtp.example.com'),
      port: env('SMTP_PORT', 587),
      auth: {
        user: env('SMTP_USERNAME'),
        pass: env('SMTP_PASSWORD'),
      },
    },
    settings: {
      defaultFrom: env('DEFAULT_FROM'),
      defaultReplyTo: env('DEFAULT_REPLY_TO'),
    },
  },
  seo: {
    enabled: true,
  },
});