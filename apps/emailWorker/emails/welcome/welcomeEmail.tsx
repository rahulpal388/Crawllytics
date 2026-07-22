import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { WelcomeEmailProps } from "./welcome.js";

export default function WelcomeEmail({
  displayName,
  dashboardUrl,
  supportEmail,
}: WelcomeEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>Welcome to SEO Analyzer — Your account is ready.</Preview>

      <Body
        style={{
          backgroundColor: "#f6f9fc",
          margin: 0,
          padding: "40px 0",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: "40px",
            border: "1px solid #e5e7eb",
          }}
        >
          <Heading
            style={{
              fontSize: "28px",
              marginBottom: "8px",
              color: "#111827",
            }}
          >
            Welcome, {displayName}! 👋
          </Heading>

          <Text
            style={{
              color: "#4b5563",
              fontSize: "16px",
              lineHeight: "26px",
            }}
          >
            Thank you for joining <strong>SEO Analyzer</strong>. Your account has been successfully
            created and you're ready to start auditing websites.
          </Text>

          <Text
            style={{
              color: "#4b5563",
              fontSize: "16px",
              lineHeight: "26px",
            }}
          >
            With SEO Analyzer you can:
          </Text>

          <Section>
            <Text style={{ margin: "8px 0" }}>✅ Crawl entire websites</Text>

            <Text style={{ margin: "8px 0" }}>✅ Detect technical SEO issues</Text>

            <Text style={{ margin: "8px 0" }}>✅ Monitor crawl performance</Text>

            <Text style={{ margin: "8px 0" }}>✅ Generate SEO reports</Text>
          </Section>

          <Section
            style={{
              textAlign: "center",
              margin: "36px 0",
            }}
          >
            <Button
              href={dashboardUrl}
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Open Dashboard
            </Button>
          </Section>

          <Hr />

          <Heading
            as="h2"
            style={{
              fontSize: "18px",
              marginTop: "30px",
            }}
          >
            Need help?
          </Heading>

          <Text
            style={{
              color: "#4b5563",
              lineHeight: "24px",
            }}
          >
            If you have any questions, simply reply to this email or contact us at{" "}
            <Link href={`mailto:${supportEmail}`}>{supportEmail}</Link>.
          </Text>

          <Hr />

          <Text
            style={{
              fontSize: "13px",
              color: "#6b7280",
              lineHeight: "22px",
            }}
          >
            You received this email because you created an account on SEO Analyzer.
          </Text>

          <Text
            style={{
              fontSize: "12px",
              color: "#9ca3af",
            }}
          >
            © {new Date().getFullYear()} SEO Analyzer. All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
