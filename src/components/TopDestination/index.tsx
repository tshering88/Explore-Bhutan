import { Box, Image, Stack, Text, useBreakpointValue, Flex } from '@chakra-ui/react';
import parotaktshang from '../../assets/parotaktshang.jpg';
import punakhavalley from '../../assets/punakhavalley.jpg';
import thim from '../../assets/thim.jpg';

const destinations = [
  {
    name: "Paro Taktsang",
    img: parotaktshang,
    description: `Perched dramatically on a cliffside 900 meters above the Paro Valley floor, Paro Taktsang, or the Tiger's Nest Monastery, is Bhutan’s most iconic landmark. 
    Legend has it that Guru Padmasambhava flew to this location on the back of a tigress and meditated here. The trek to the monastery offers breathtaking views and spiritual serenity, making it a pilgrimage for both locals and travelers seeking peace and awe.`
  },
  {
    name: "Punakha Dzong",
    img: punakhavalley,
    description: `Known as the "Palace of Great Happiness," Punakha Dzong is a majestic fortress nestled at the confluence of the Pho Chhu and Mo Chhu rivers. 
    It served as the capital of Bhutan until 1955 and still houses important religious relics. The architecture is a stunning mix of intricate woodwork, massive whitewashed walls, and rich cultural symbolism. During spring, the surrounding jacaranda trees bloom in purple, enhancing its magical charm.`
  },
  {
    name: "Thimphu Valley",
    img: thim,
    description: `Thimphu, Bhutan’s capital, is a vibrant blend of tradition and modernity set in a tranquil valley. Here, ancient monasteries coexist with bustling markets, and traffic is directed by white-gloved policemen instead of lights. 
    Visitors can explore cultural landmarks like the Tashichho Dzong, the National Memorial Chorten, and the massive Buddha Dordenma statue, all while enjoying the valley’s cool, fresh air and scenic views.`
  }
];

const TopDestination = () => {
  

  return (
    <Box p={4}>
      <Text fontSize="3xl" fontWeight="semibold" mb={8} textAlign="center">
        Top Destinations
      </Text>

      <Stack spaceX={6}>
        {destinations.map((place, idx) => (
          <Flex
            key={idx}
            direction={{ base: "column", md: idx % 2 === 0 ? "row" : "row-reverse" }}
            borderRadius="2xl"
            overflow="hidden"
            shadow="md"
            _hover={{
              transform: 'scale(1.02)',
              transition: 'transform 0.3s ease',
            }}
            bg="white"
          >
            <Box flex="1">
              <Image  loading="lazy"
                src={place.img}
                alt={place.name}
                objectFit="cover"
                height={{ base: "200px", md: "100%" }}
                width="100%"
              />
            </Box>
            <Box p={6} flex="1" display="flex" flexDirection="column" justifyContent="center">
              <Text fontSize="2xl" fontWeight="bold" mb={2}>
                {place.name}
              </Text>
              <Text fontSize="md" color="gray.700" lineHeight="1.6">
                {place.description}
              </Text>
            </Box>
          </Flex>
        ))}
      </Stack>
    </Box>
  );
};

export default TopDestination;
