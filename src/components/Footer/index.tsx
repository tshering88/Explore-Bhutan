import { Box, Text, Heading, VStack } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box as="footer" bg="pink.900" color="white" textAlign="center" py={8} position="fixed" bottom={0} width="100%">
      <Box maxW="1000PX" mx='auto'>
        <VStack letterSpacing={1}>
        <Heading fontSize="20px" fontWeight="bold">© 2025 Explore Bhutan. All rights reserved.</Heading>
          <Heading size="md">Contact Us</Heading>
          <Text>Email:ExploreBhutan660@gmail.com</Text>
          <Text>Phone no:+975-77645336</Text>
          <Text>Address:Thimphu,Bhutan</Text>
        
        </VStack>
      </Box>
    </Box>

  )
}

export default Footer