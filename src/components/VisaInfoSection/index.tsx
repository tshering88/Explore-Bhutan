import { Box, Heading, Text, List, ListItem, Card, Image, Flex } from '@chakra-ui/react';
import visa from '../../assets/visa.png'
const tips = [
  <>
    Carry printouts of <Text as="span" fontWeight="bold">hotel bookings</Text> and <Text as="span" fontWeight="bold">travel insurance</Text>.
  </>,
  <>
    Double-check your <Text as="span" fontWeight="bold">passport validity</Text> (must be valid for at least 6 months).
  </>,
  <>
    Ensure you have a <Text as="span" fontWeight="bold">confirmed itinerary</Text> along with a licensed Bhutanese <Text as="span" fontWeight="bold">tour guide and driver</Text>.
  </>,
  <>
    Bring sufficient <Text as="span" fontWeight="bold">cash in USD or INR</Text> as ATMs may not be reliable in rural areas.
  </>,
  <>
    Purchase <Text as="span" fontWeight="bold">travel insurance</Text> that covers <Text as="span" fontWeight="bold">medical emergencies</Text> and <Text as="span" fontWeight="bold">trip cancellations</Text>.
  </>,
];

  

const VisaInfoSection = () => (
    <Card.Root m={'4'} p={4}>
      <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
  <Box flex={1}>
    <Heading size="lg" mb={2}>
      Visa Information for Bhutan
    </Heading>
    <Text mb={4}>
      <Text as="span" fontWeight="semibold">Visa Process:</Text> <br/> Apply online through the official Bhutan-Visas portal. 
      After submission, schedule a biometric appointment at your local consulate or visa center
    </Text>
    <Text mb={4}>
      <Text as="span" fontWeight="semibold">Daily Fee:</Text> <br/> The daily Sustainable Development Fee (SDF) 
      for tourist travel in Bhutan is <strong>$200 per person </strong> 
      per night for non-Indian nationals. Children between 6 and 12 years old pay half the fee ($50 per day),
       and <strong>children under 5 </strong> are exempt.
    </Text>
    <Box>
      <Text fontWeight="semibold" mb={2}>Travel Tips:</Text>
      <List.Root gap={2} pl={4}>
        {tips.map((tip, index) => (
          <ListItem key={index}>{tip}</ListItem>
        ))}
      </List.Root>
    </Box>
    </Box>
    <Box flex={1} display='flex' justifyContent='center' alignItems='center'>
      <Image
      src={visa}
      alt='Visa mage'
      mt={2}
      borderRadius='md'
      maxW='100%'
      maxH='400px'
      objectFit='cover'
      />
    </Box>

    
  
  </Flex>
  </Card.Root>
);

export default VisaInfoSection;
