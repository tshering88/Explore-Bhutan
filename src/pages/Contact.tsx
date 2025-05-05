import { Box, Stack} from '@chakra-ui/react'
import ContactDetail from '../components/ContactDetail'
import ContactForm from '../components/ContactForm'


const Contact = () => {
  return (
     <Box>
     <Stack
      direction="row"
      height="auto"
      minHeight="100px"
      justify="center"
      mt={1}
      w='100%'
      maxW="1200px"
         
      >
       
        <ContactForm/>
        <ContactDetail/>
      
      </Stack>
   </Box>
   
  )
}

export default Contact
