import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
  } from '@chakra-ui/react';
  
  const MapSection = () => {
    return (
      <Box mt={12} mb={12}>
        <Container maxW="container.xl">
          <VStack gap={8}>
            <Heading textAlign="center" size={'3xl'}>Find Us</Heading>
  
            <Box
              w="100%"
              h="400px"
              border="1px"
              borderColor="gray.200"
              rounded="md"
              overflow="hidden"
            >
              <iframe
                // src="https://www.openstreetmap.org/export/embed.html?bbox=89.6265,27.4712,89.6453,27.4829&layer=mapnik"
                src='https://www.openstreetmap.org/export/embed.html?bbox=90.0950,27.0130,90.1050,27.0200&layer=mapnik
'
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Map of Thimphu"
              />
            </Box>
  
            <Text textAlign="center">
              Located in the heart of Damphu, our office is easily accessible from major landmarks.
            </Text>
          </VStack>
        </Container>
      </Box>
    );
  };
  
  export default MapSection;
  