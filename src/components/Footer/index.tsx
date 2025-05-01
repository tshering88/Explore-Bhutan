// components/Footer.jsx
import {
  Box,
  Container,
  Stack,
  Text,
  Icon,
  SimpleGrid,
  Heading,
  Image,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link  } from "react-router-dom";

// Reusable link section data
const footerSections = [
 
  {
    heading: "Services",
    links: ["Cultural", "Trekking", "Visa Assistance", "Travel Insurance"],
  },
];
const socialLinks = [
  { label: "Facebook", icon: FaFacebook, href: "https://facebook.com" },
  { label: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
  { label: "Twitter", icon: FaTwitter, href: "https://twitter.com" },
];

const Footer = () => {
  return (
    <Box bg="green" color="white" justifyContent={'space-around'}>
      <Container py={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} >
          {/* Branding */}
          <Stack wordSpacing={3}>
            <Box textAlign={'center'} alignSelf={'center'}>
            <Heading fontSize="lg" color="yellow">
              Explore Bhutan
            </Heading>
            <Image rounded={'md'} boxSize={'150px'} borderRadius={'full'} fit={'cover'} alt='logo'
            src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Emblem_of_the_Prime_Minister_of_Bhutan.png"  />
           
            </Box>
          </Stack>

          {/* Dynamic Link Sections */}
          {footerSections.map(({ heading, links }) => (
            <Stack key={heading} align="flex-start" gap={1}>
              <Text fontWeight="600" mb={2}>
                {heading}
              </Text>
              {links.map((link) => (
                <Link
                  key={link}
                 className="footerlink"
                  to={link}
                  
                 
                >
                  {link}
                </Link>
              ))}
            </Stack>
          ))}

          {/* Contact & Social */}
          <Stack align="flex-start" gap={1}>
            <Text fontWeight="600" mb={2}>
              Contact
            </Text>
            <Text fontSize="sm">Tsirang, Bhutan</Text>
            <Text fontSize="sm">info@explorebhutan.com</Text>
            <Text fontSize="sm">+975 17368936 / 77310335</Text>
            <Stack direction="row" gap={3} mt={2}>
              {socialLinks.map(({ label, icon, href }) => (
                <Link key={label} to={href}  aria-label={label} className="footerlink">
                  <Icon as={icon} boxSize={8} color="white" />
                </Link>
              ))}
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* Footer Bottom */}
      <Box py={4}>
        <Text fontSize="sm" textAlign="center" fontWeight={'bold'} pb={'8'}>
          &copy; {new Date().getFullYear()} Explore Bhutan. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
