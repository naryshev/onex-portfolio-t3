import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}



export const EmailTemplate = ({
  userFirstname,
}: EmailProps) => (
  <Html>
    <Head />
    <Preview>
      The engineering and production platform that keeps you up to date.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
            src={`https://raw.githubusercontent.com/danielnaryshev/onex-portfolio-t3/main/public/src/1xLogo.png`}
            width="170"
            height="170"
            alt="ONEX"
            style={logo}
          />
        <Text style={paragraph}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Thanks for subscribing.
          <br />
          We’re thrilled to have you on board. Stay tuned for weekly updates.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://onex.zip">
            Get started
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          ONEX
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          310 Zip Ave, Los Angeles, CA 90403
        </Text>
      </Container>
    </Body>
  </Html>
);



export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
  maxWidth: "40%"
};

const button = {
  backgroundColor: "#c026d3",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};


