import { Resend } from 'resend'
import envConfig from '../config'
import { OTPEmail } from 'emails/otp'

export class EmailService {
  constructor(private resend: Resend) {
    this.resend = new Resend(envConfig.RESEND_API_KEY)
  }

  sendOTP(payload: { email: string; code: string }) {
    const subject = 'Mã OTP'
    return this.resend.emails.send({
      from: 'Ecommerce <onboarding@resend.dev>',
      to: [payload.email],
      subject,
      react: <OTPEmail otpCode={payload.code} title={subject} />,
    })
  }
}
