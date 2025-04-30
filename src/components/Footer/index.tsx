// components/Footer.jsx
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Icon,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// Reusable link section data
const footerSections = [
  {
    heading: "Quick Links",
    links: ["Home", "Destinations", "Tours", "Blog", "Contact"],
  },
  {
    heading: "Services",
    links: ["Cultural Tours", "Trekking", "Visa Assistance", "Travel Insurance"],
  },
];

const socialLinks = [
  { label: "Facebook", icon: FaFacebook, href: "#" },
  { label: "Instagram", icon: FaInstagram, href: "#" },
  { label: "Twitter", icon: FaTwitter, href: "#" },
];

const Footer = () => {
  return (
    <Box bg="green" color="white">
      <Container maxW="6xl" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          {/* Branding */}
          <Stack spacing={3}>
            <Heading fontSize="lg" color="yellow">
              Explore Bhutan
            </Heading>
            <Text fontSize="sm">Discover the Kingdom of Happiness.</Text>
          </Stack>

          {/* Dynamic Link Sections */}
          {footerSections.map(({ heading, links }) => (
            <Stack key={heading} align="flex-start" spacing={1}>
              <Text fontWeight="600" mb={2}>
                {heading}
              </Text>
              {links.map((link) => (
                <Link key={link} href="#" _hover={{ textDecoration: "underline" }}>
                  {link}
                </Link>
              ))}
            </Stack>
          ))}

          {/* Contact & Social */}
          <Stack align="flex-start" spacing={1}>
            <Text fontWeight="600" mb={2}>
              Contact
            </Text>
            <Text fontSize="sm">Tsirang, Bhutan</Text>
            <Text fontSize="sm">info@explorebhutan.com</Text>
            <Text fontSize="sm">+975 17368936 / 77310335</Text>
            <Stack direction="row" spacing={3} mt={2}>
              {socialLinks.map(({ label, icon, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon as={icon} boxSize={5} color="black" />
                </Link>
              ))}
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* Footer Bottom */}
      <Box py={4}>
        <Text fontSize="sm" textAlign="center">
          &copy; {new Date().getFullYear()} Explore Bhutan. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;