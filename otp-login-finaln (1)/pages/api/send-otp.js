
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ message: 'البريد الإلكتروني مطلوب' });
  }

  const otp = Math.floor(1000 + Math.random() * 9000);

  try {
    await sendgrid.send({
      to: email,
      from: 'abaqkingdom@gmail.com',
      subject: 'رمز التحقق OTP',
      text: `رمز التحقق الخاص بك هو: ${otp}`,
    });

    res.status(200).json({ message: 'تم إرسال رمز التحقق بنجاح' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'فشل في إرسال البريد' });
  }
}
