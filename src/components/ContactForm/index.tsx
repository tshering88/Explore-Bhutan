import {
  Box,
  Button,
  Center,
  Input,
  Stack,
  Textarea,
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
    <Box minH="100vh" p={5} mb="30px" w='100%' maxW="2000px"   h='150px'>
      <Center h="100%">
        <Box
          bg="whiteAlpha.900"
          border="1px solid"
          borderColor="black"
          borderRadius="lg"
          p="6"
          maxW="md"
          w="full"
       height={"1/2"}
        >
          <form ref={formRef} onSubmit={sendEmail}>
            <Stack gap={4}>
              <Input name="user_name" placeholder="Your Name" required />
              <Input
                name="user_email"
                type="email"
                placeholder="Your Email"
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                required
                rows={8}
              />
              <Button type="submit" colorPalette="green">
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Center>
    </Box>
  );
};

export default ContactForm;
