import { Box, Text, Image, VStack, Heading, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const DestinationCard = () => {

  return (
    <Flex justify="center" gap={4} flexWrap="wrap" p={4}>
      
      <Box
        maxW="sm"
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        height="100%"
        display="flex"
        flexDirection="column"
        p={4}
   >
  <Image
       src="https://www.tourmyindia.com/blog//wp-content/uploads/2022/10/Best-Places-to-Visit-in-Bhutan-Tourism.jpg"
       alt="Paro Taktsang Monastery in Bhutan"
     />
   <Box p="6" flexGrow={1}>
  <VStack align="start" spaceX={3}>
  <Heading size="md">Paro Taktsang</Heading>
  <Text fontSize="sm">
  Discover the awe-inspiring Paro Taktsang, Bhutan's iconic cliffside
  monastery nestled high above the Paro Valley. Legend says Guru
  Padmasambhava flew here on a tiger to meditate in the sacred caves.
  Hike through pine forests and clouds to reach this spiritual marvel.
  <Link
    to= "https://en.wikipedia.org/wiki/Paro_Taktsang"
    color="teal.500"
    target="_blank"
    rel="noopener noreferrer"
  >
  
  </Link>
</Text>
  </VStack>
  </Box>
 </Box>
      <Box
        maxW="sm"
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        height="100%"
        display="flex"
        flexDirection="column"
        p={4}
      >
        <Image
          src="src/assets/Buddha-Dordenma-.jpg"
          alt="Buddha-Dordenma"
        />
        <Box p="6" flexGrow={1}>
          <VStack align="start" spaceX  ={3}>
            <Heading size="md">Buddha-Dordenma</Heading>
            <Text fontSize="sm">
            Siddhartha Gautama, most commonly referred to as the Buddha,
            was a wandering ascetic and religious teacher who lived in South Asia during the 6th or 5th century BCE and founded Buddhism.
            </Text>
          </VStack>
        </Box>
      </Box>
      <Box
        maxW="sm"
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        height="100%"
        display="flex"
        flexDirection="column"
        p={4}
      >
        <Image
          src="src/assets/PUNAKH1.jpg"
          alt="punakha Dzong"
        />
        <Box p="6" flexGrow={1}>
          <VStack align="start" scaleX={3}>
            <Heading size="md">Punakha Dzong</Heading>
            <Text fontSize="sm">
            The Punakha Dzong, also known as Pungthang Dewa chhenbi Phodrang, is the administrative centre of Punakha District in Punakha, Bhutan.
            Constructed by Ngawang Namgyal, 1st Zhabdrung Rinpoche, in 1637-38, it is the second oldest and second-largest dzong in Bhutan and one of its most majestic structures.
            </Text>
          </VStack>
        </Box>
      </Box>
      <Box
        maxW="sm"
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        height="100%"
        display="flex"
        flexDirection="column"
        p={4}
      >
        <Image
          src="src/assets/wangdue-phodrang-Dzong.jpg"
          alt="Wangdue Phodrang Dzong"
        />
        <Box p="6" flexGrow={1}>
          <VStack align="start" scaleX={3}>
            <Heading size="md">Wangdue Phodrang Dzong</Heading>
            <Text fontSize="sm">
            Wangdue Phodrang District is a Thromde and dzongkhag of central Bhutan.
            This is also the name of the dzong which dominates the district. 
            The name is said to have been given by the Shabdrung Ngawang Namgyal who was searching for the best location for a dzong to prevent incursions from the south. 
            </Text>
          </VStack>
        </Box>
      </Box>
      <Box
        maxW="sm"
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        height="100%"
        display="flex"
        flexDirection="column"
        p={4}
      >
        <Image
          src="src/assets/phobjikha.jpg"
          alt="Phobjikha Valley"
        />
        <Box p="6" flexGrow={1}>
          <VStack align="start" scaleX={3}>
            <Heading size="md">Phobjikha Valley</Heading>
            <Text fontSize="sm">
            The Phobjikha Valley ཕོབ་སྦྱིས་ཁ spelled as Pho-sbis-kha, is a vast U-shaped valley in central Bhutan. 
            The valley houses one of the impressive ancient Buddhist monasteries in Bhutan known as Gangteng Monastery of the Nyingma sect in central Bhutan.
            </Text>
          </VStack>
        </Box>
      </Box>
       <Box
        maxW="sm"
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        height="100%"
        display="flex"
        flexDirection="column"
        p={4}
      >
        <Image
          src="src/assets/bumthang.jpg"
          alt="Bumthang"
        />
        <Box p="6" flexGrow={1}>
          <VStack align="start" scaleX={3}>
            <Heading size="md">Bumthang</Heading>
            <Text fontSize="sm">
            Bumthang is known as the spiritual heartland of the kingdom. 
            Bumthang is one of the most historic districts in Bhutan with many sacred sites and monasteries. 
            It was here that Guru Rinpoche cured a local king from a spirit induced ailment in the 8th century CE.
            </Text>
          </VStack>
        </Box>
      </Box>
      
    </Flex>
  );
};

export default DestinationCard;