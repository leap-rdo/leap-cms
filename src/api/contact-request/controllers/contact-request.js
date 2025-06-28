module.exports = {
  async create(ctx) {
    const { firstName, lastName, companyName, subject, email, message } = ctx.request.body;
    
    // تحقق من البيانات
    if (!firstName || !email || !message) {
      return ctx.badRequest('Please fill all fields');
    }
    
    // أنشئ الطلب في قاعدة البيانات
    const entry = await strapi.query('contact-request').create({
      firstName,
      lastName,
      companyName,
      subject,
      email,
      message,
    });
    
    // أرسل البريد الإلكتروني
    const emailSent = await strapi.services['contact-request'].sendEmail({
      firstName,
      lastName,
      companyName,
      subject,
      email,
      message,
    });
    
    if (!emailSent) {
      console.error('Failed to send email');
    }
    
    return entry;
  },
};