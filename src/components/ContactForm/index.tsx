import {
  Box,
  Button,
  Center,
  Input,
  Stack,
  Textarea,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error("EmailJS environment variables are missing.");
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully!");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("Email error:", error);
        toast.error("Failed to send message.");
      });
  };

  return (
    <Box minH="100vh" bg="gray.50" py={10} px={4}>
      <Center>
        <Box maxW="600px" w="full" bg="white" boxShadow="lg" borderRadius="xl" p={8}>
          <Heading size="lg" textAlign="center" mb={4}>
            Get in Touch
          </Heading>
          <Text textAlign="center" fontSize="md" color="gray.600" mb={6}>
            We'd love to hear from you! Fill out the form below and we'll get back to you shortly.
          </Text>

          <form ref={formRef} onSubmit={sendEmail}>
            <Stack gap={4}>
              <Input
                name="user_name"
                placeholder="Your Name"
                required
              />
              <Input
                name="user_email"
                type="email"
                placeholder="Your Email"
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
              />
              <Button type="submit" bg="green" size="lg">
                Send Message
              </Button>
            </Stack>
          </form>
        </Box>
      </Center>
    </Box>
  );
};

export default ContactForm;
