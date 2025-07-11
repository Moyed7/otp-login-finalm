
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendOtp = async () => {
    const res = await fetch('/api/send-otp?email=' + email);
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>تسجيل الدخول عبر OTP</h1>
      <input
        type="email"
        placeholder="أدخل بريدك الإلكتروني"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 10, width: 300 }}
      />
      <button onClick={sendOtp} style={{ marginLeft: 10, padding: 10 }}>
        إرسال رمز التحقق
      </button>
      <p>{message}</p>
    </div>
  );
}
