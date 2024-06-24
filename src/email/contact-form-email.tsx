
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
};
export default function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
    return (
    <Html>
        <Head />
        <Preview>Great news! New message coming from your portfolio! </Preview>
        <Tailwind>
            <Body className="bg-gray-300 p-4">
                <Container >
                    <Section className=" border border-blue-300  rounded-xl px-6 p-4 my-4">
                        <Heading className="leading-tight">Check the email coming from your portfolio</Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>The message is from: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>

    </Html>
    );
}