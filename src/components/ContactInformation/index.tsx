
import {
  Box,
  Flex,
  Heading,
  Icon,
 
  Text,
  VStack,
  HStack,
  

} from '@chakra-ui/react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  
} from 'react-icons/fa';



const ContactInfo = () => {
//   const bgColor = useColorModeValue('gray.50', 'gray.800');
  
  const contactItems = [
    {
      icon: FaMapMarkerAlt,
      title: 'Our Address',
      content: '123 Tourism Avenue, Thimphu, Bhutan'
    },
    {
      icon: FaPhone,
      title: 'Phone Number',
      content: '+975 2 334455'
    },
    {
      icon: FaEnvelope,
      title: 'Email Address',
      content: 'info@explorebhutan.com'
    },
    {
      icon: FaClock,
      title: 'Office Hours',
      content: 'Monday-Friday: 9:00 AM - 5:00 PM'
    }
  ];
  
  return (
    <Box minH="100vh" bg="gray.50" py={10} px={4}>
    <VStack gap={6} align="stretch">
      <Heading as="h3" size="md">
        Contact Information
      </Heading>
      
      <VStack gap={4} align="stretch">
        {contactItems.map((item, index) => (
          <HStack
            key={index}
            // bg={bgColor}
            p={4}
            rounded="md"
            gap={4}
          >
            <Flex
              w={10}
              h={10}
              align="center"
              justify="center"
              rounded="full"
              bg="teal.100"
              color="teal.700"
            >
              <Icon as={item.icon} w={5} h={5} />
            </Flex>
            <Box>
              <Text fontWeight="bold">{item.title}</Text>
              <Text >
                {item.content}
              </Text>
            </Box>
          </HStack>
        ))}
      </VStack>
      
      
    </VStack>
    </Box>
  );
};
export default ContactInfo