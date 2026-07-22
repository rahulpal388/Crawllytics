import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { OTPEmailProps } from "./otp.js";

export default function OTPEmail({
  username,
  appName,
  otp,
  expiresInMinutes,
  supportEmail,
}: OTPEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>
        Your {appName} verification code is {otp}
      </Preview>

      <Body
        style={{
          backgroundColor: "#f5f7fb",
          margin: 0,
          padding: "40px 20px",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <Container
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: "40px",
            border: "1px solid #e5e7eb",
          }}
        >
          <Heading
            style={{
              marginTop: 0,
              marginBottom: "24px",
              fontSize: "28px",
              color: "#111827",
            }}
          >
            Verify your email
          </Heading>

          <Text
            style={{
              color: "#374151",
              fontSize: "16px",
              lineHeight: "26px",
            }}
          >
            Hi {username},
          </Text>

          <Text
            style={{
              color: "#374151",
              fontSize: "16px",
              lineHeight: "26px",
            }}
          >
            Use the verification code below to continue signing in to <strong>{appName}</strong>.
          </Text>

          <Section
            style={{
              margin: "32px 0",
              textAlign: "center",
            }}
          >
            <Text
              style={{
                display: "inline-block",
                backgroundColor: "#f3f4f6",
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                padding: "18px 32px",
                fontSize: "34px",
                letterSpacing: "10px",
                fontWeight: 700,
                color: "#111827",
                margin: 0,
              }}
            >
              {otp}
            </Text>
          </Section>

          <Text
            style={{
              color: "#374151",
              fontSize: "16px",
              lineHeight: "26px",
            }}
          >
            This code expires in <strong>{expiresInMinutes} minutes</strong>.
          </Text>

          <Text
            style={{
              color: "#374151",
              fontSize: "16px",
              lineHeight: "26px",
            }}
          >
            If you didn't request this code, you can safely ignore this email. Your account will
            remain secure.
          </Text>

          <Hr
            style={{
              borderColor: "#e5e7eb",
              margin: "32px 0",
            }}
          />

          <Text
            style={{
              color: "#6b7280",
              fontSize: "13px",
              lineHeight: "22px",
            }}
          >
            Need help? Contact us at{" "}
            <a
              href={`mailto:${supportEmail}`}
              style={{
                color: "#2563eb",
              }}
            >
              {supportEmail}
            </a>
          </Text>

          <Text
            style={{
              color: "#9ca3af",
              fontSize: "12px",
              marginTop: "24px",
            }}
          >
            © {new Date().getFullYear()} {appName}. All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
