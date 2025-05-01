import { Box, Heading, Text, List, ListItem, Card } from '@chakra-ui/react';

const tips = [
    
    'Carry printouts of hotel bookings and travel insurance.',
    'Double-check your passport validity (must be valid for at least 6 months).',
    'Ensure you have a confirmed itinerary and a licensed Bhutanese tour guide.',
    'Bring sufficient cash in USD or INR as ATMs may not be reliable in rural areas.',
    'Purchase travel insurance that covers medical emergencies and trip cancellations.',
    'Pack appropriate clothing for varying altitudes and weather conditions.',
   
  ];
  

const VisaInfoSection = () => (
    <Card.Root m={'4'}>
  <Box mb={8} p={4} w={'10/12'}>
    <Heading size="lg" mb={2}>
      Visa Information for Bhutan
    </Heading>
    <Text mb={1}>
      <Text as="span" fontWeight="semibold">Visa Process:</Text> <br/> Apply online through the official Bhutan-Visas portal. 
      After submission, schedule a biometric appointment at your local consulate or visa center
    </Text>
    <Text mb={4}>
      <Text as="span" fontWeight="semibold">Daily Fee:</Text> <br/> The daily Sustainable Development Fee (SDF) for tourist travel in Bhutan is $100 per person per night for non-Indian nationals. Children between 6 and 12 years old pay half the fee ($50 per day), and children under 5 are exempt.
    </Text>
    <Box>
      <Text fontWeight="semibold" mb={2}>Travel Tips:</Text>
      <List.Root m={'4'}>
        {tips.map((tip, index) => (
          <ListItem key={index}>{tip}</ListItem>
        ))}
      </List.Root>
    </Box>
  </Box>
  </Card.Root>
);

export default VisaInfoSection;
