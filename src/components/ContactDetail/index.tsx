import { Box, Center, Heading, Icon, Stack, Text } from "@chakra-ui/react"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { LuPhone } from "react-icons/lu"
import { MdEmail, MdLocationOn } from "react-icons/md"


const ContactDetail = () => {
  return (
    <Center >
    <Box
    bgImage='src/assets/tashichoedzong.jpg'
    p={5}
    mb="30px"
    color='black'
    >
        <Stack gap="5">

        <Heading>Contact Detail</Heading>
        
        <Stack gap="5" direction="row" >
        <Icon as={MdLocationOn} boxSize={6} color="red.500" />
        <Box >
            <Text fontSize="md">2nd floor of Municipal Office (the Conference Hall),<br />
              near the Dzong and Hospital, Tsirang Bhutan </Text>
            <Text fontWeight="light">P.O.Box: 114</Text>
            </Box>
          </Stack>

        <Stack direction="row" gap="5">
        <Icon as={MdEmail} boxSize={6} color="red.500" />
          <Box>
            <Text fontSize="md">
            tsirangict@gmail.com</Text>
            <Text fontWeight="light">Mail Us</Text>
          </Box>
        </Stack>

        <Stack direction="row" gap="5">
        <Icon as={LuPhone} boxSize={6} color="red.500" />
          <Box>
            <Text fontSize="md">+975 17368936 / 77310335</Text>
            <Text fontWeight="light">Call Us</Text>
          </Box>
        </Stack>

        </Stack>

    </Box>
    </Center>
  )
}

export default ContactDetail
