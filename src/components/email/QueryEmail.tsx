import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface KoalaWelcomeEmailProps {
  name: string;
  country: string;
  street: string;
  city: string;
  postcode: number;
  phoneNumber: number;
  email: string;
  subject: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const QueryEmail = ({
  name,
  country,
  street,
  city,
  postcode,
  phoneNumber,
  email,
  subject,
  message,
}: KoalaWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>About the {subject}</Preview>
    <Body style={main}>
      <Container style={container}>
         
        <Heading as="h2">About the {subject} </Heading>
        <Text style={paragraph}>message: {message}</Text>
        <Text style={paragraph}>
          Name: {name}
          <br />
          {email}
          <br />
          {phoneNumber}
          <Hr style={hr} />
        </Text>
      </Container>
    </Body>
  </Html>
);

export default QueryEmail;

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
};

const button = {
  backgroundColor: "#5F51E8",
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
