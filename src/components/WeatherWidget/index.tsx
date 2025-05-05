import { Box, Heading, List, ListItem, Image, CardRoot, Flex } from '@chakra-ui/react';

const weatherLines = [
  'Mild days and cool nights, perfect for outdoor activities like hiking and sightseeing.',
  'Average temperature: 15°C to 22°C, making it comfortable for long walks or exploring the valleys.',
  'Occasional spring showers, so packing a light rain jacket or umbrella is recommended.',
  'Lush green landscapes with blooming flowers, ideal for photography enthusiasts.',
  'Ideal season for visiting Bhutan’s beautiful temples, including the famous Paro Taktsang (Tiger’s Nest).',
  'Clear skies during the day with occasional cloud cover in the evenings, providing a peaceful atmosphere.',
  'Spring is considered one of the best times to visit Bhutan due to moderate temperatures and vibrant scenery.',
  'Recommended clothing: light layers for the day, a warmer jacket for evenings, and comfortable shoes for exploring.'
];

const WeatherWidget = () => (
  <CardRoot m={'4'}>
    <Box mb={8} p={4} w="full">
      <Heading size="lg" mb={2}>
        Weather in Bhutan during Spring
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
        <Box flex="1">
          <List.Root gap={1} pl={'4'}>
            {weatherLines.map((line, index) => (
              <ListItem key={index}>{line}</ListItem>
            ))}
          </List.Root>
        </Box>
        <Box flex="1" display="flex" justifyContent="center" alignItems="center">
          <Image  loading="lazy"
            src="https://www.esikkimtourism.in/bhutan/wp-content/uploads/2019/11/haa-valley-in-june-boxx.jpg"
            alt="Spring in Bhutan"
            mt={2}
            borderRadius="md"
            maxW="80%"
            objectFit="cover"
          
          />
        </Box>
      </Flex>
    </Box>
  </CardRoot>
);

export default WeatherWidget;
