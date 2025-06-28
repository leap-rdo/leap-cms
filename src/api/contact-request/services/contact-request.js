module.exports = {
  async sendEmail(data) {
    try {
      await strapi.plugins['email'].services.email.send({
        to: env('DEFAULT_REPLY_TO'),
        from: env('DEFAULT_FROM'),
        subject: data.subject,
        text: `
          First Name: ${data.firstName}
          Last Name: ${data.lastName}
          Company: ${data.companyName}
          Email: ${data.email}
          Message: ${data.message}
        `,
        html: `
          <h1>New Contact Request</h1>
          <p><strong>First Name:</strong> ${data.firstName}</p>
          <p><strong>Last Name:</strong> ${data.lastName}</p>
          <p><strong>Company:</strong> ${data.companyName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong> ${data.message}</p>
        `,
      });
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  },
};