import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
 } from '@chakra-ui/react';

import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInformation';
import MapSection from '../components/MapSection';


const Contact = () => {
  return (
    <Box>
      
      <Heading textAlign={'center'} size={'3xl'} mt={'20'}>Contact Us</Heading>
    <Container maxW="container.xl" py={12}>
      <Grid
        templateColumns={{ base: '1fr', lg: '3fr 2fr' }}
        gap={{ base: 8, lg: 12 }}
      >
        <GridItem>
          <ContactForm/>
        </GridItem>
        <GridItem>
          <ContactInfo />
        </GridItem>
      </Grid>
    </Container>
    
    <MapSection />

  </Box>
   
  )
}

export default Contact
