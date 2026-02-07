import { Body, Container, Head, Heading, Html, Img, Link, Section, Text } from '@react-email/components'

interface OTPEmailProps {
  otpCode: string
  title: string
}
const logoUrl =
  'https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-1/451313593_1228721121622599_7501337870300383532_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHLhvCtouE1I3jKP1-_fL5R3F19icR1JhvcXX2JxHUmG6XzPeBvkUkTQNxODS4wqliG-SCAfwRPMJqCLL3Bo1Mz&_nc_ohc=q2H01RNlD5kQ7kNvwH5MR7l&_nc_oc=Adncmyxp9Z5nmQv1b0zzaVfbbX2NG0oWPjKimmigsno-EXIwqheWJLx8TejvEz1kWjU&_nc_zt=24&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=5-xUgH9k-lOCIC86ZpkqIA&oh=00_AfqkJGMypT-X3iDoUslHpXWm0DaaOQvvJ17ShBRc29qXLw&oe=69795AED'
export const OTPEmail = ({ otpCode, title }: OTPEmailProps) => (
  <Html>
    <Head>
      <title>{title}</title>
    </Head>
    <Body style={main}>
      <Container style={container}>
        <Img src={logoUrl} width="212" height="88" alt="Logo" style={logo} />
        <Text style={tertiary}>Mã xác thực OTP</Text>
        <Heading style={secondary}>Hãy nhập mã xác thực OTP sau vào website</Heading>
        <Section style={codeContainer}>
          <Text style={code}>{otpCode}</Text> 
        </Section>
        <Text style={paragraph}>Nếu bạn không chủ động thực hiện hành động này, xin hãy bỏ qua email?</Text>
      </Container>
      <Text style={footer}>From Hải Đăng</Text>
    </Body>
  </Html>
)

OTPEmail.PreviewProps = {
  otpCode: '144833',
  title: 'Mã OTP',
} as OTPEmailProps

export default OTPEmail

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #eee',
  borderRadius: '5px',
  boxShadow: '0 5px 10px rgba(20,50,70,.2)',
  marginTop: '20px',
  maxWidth: '360px',
  margin: '0 auto',
  padding: '68px 0 130px',
}

const logo = {
  margin: '0 auto',
  width: '70px',
  height: '70px',
  borderRadius: '100%',
}

const tertiary = {
  color: '#0a85ea',
  fontSize: '11px',
  fontWeight: 700,
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  height: '16px',
  letterSpacing: '0',
  lineHeight: '16px',
  margin: '16px 8px 8px 8px',
  textTransform: 'uppercase' as const,
  textAlign: 'center' as const,
}

const secondary = {
  color: '#000',
  display: 'inline-block',
  fontFamily: 'HelveticaNeue-Medium,Helvetica,Arial,sans-serif',
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '0',
  marginTop: '0',
  textAlign: 'center' as const,
}

const codeContainer = {
  background: 'rgba(0,0,0,.05)',
  borderRadius: '4px',
  margin: '16px auto 14px',
  verticalAlign: 'middle',
  width: '280px',
}

const code = {
  color: '#000',
  display: 'inline-block',
  fontFamily: 'HelveticaNeue-Bold',
  fontSize: '32px',
  fontWeight: 700,
  letterSpacing: '6px',
  lineHeight: '40px',
  paddingBottom: '8px',
  paddingTop: '8px',
  margin: '0 auto',
  width: '100%',
  textAlign: 'center' as const,
}

const paragraph = {
  color: '#444',
  fontSize: '15px',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  letterSpacing: '0',
  lineHeight: '23px',
  padding: '0 40px',
  margin: '0',
  textAlign: 'center' as const,
}

const link = {
  color: '#444',
  textDecoration: 'underline',
}

const footer = {
  color: '#000',
  fontSize: '12px',
  fontWeight: 800,
  letterSpacing: '0',
  lineHeight: '23px',
  margin: '0',
  marginTop: '20px',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  textAlign: 'center' as const,
  textTransform: 'uppercase' as const,
}
