import { Image, Text, Heading, SimpleGrid, CardBody, CardHeader, CardRoot } from '@chakra-ui/react';
import paro from '../../assets/paro.jpeg';
import thimphu from '../../assets/thimphu.jpeg';
import punakha from '../../assets/punakha.webp';
import wangduephodrang from '../../assets/wangduephodrang.jpeg'
import bumthang from '../../assets/bumthang.jpeg'
import mongar from '../../assets/mongar.jpeg'

const festivals = [
  {
    name: 'Paro Tshechu',
    date: 'March 29–31, 2025',
    location: 'Paro Dzong',
    image: paro,
    description: 'A colorful festival celebrated in Paro.',
  },
  {
    name: 'Thimphu Tshechu',
    date: 'October 1-3, 2025',
    location: 'Thimphu Dzong',
    image: thimphu,
    description: 'The largest Tshechu held in Bhutan.',
  },
  {
    name: 'Punakha Tshechu',
    date: 'November 8-10, 2025',
    location: 'Punakha Dzong',
    image: punakha,
    description: 'Most amazing Tshechu in Bhutan.',
  },
  {
    name: 'Wangdue Phodrang',
    date: 'September 8-10, 2025',
    location: 'Wangdue Phodrang Dzong',
    image: wangduephodrang,
    description: 'Most amazing Tshechu in Bhutan.',
  },
  {
    name: 'Bumthang Tshechu',
    date: 'November 16-19, 2025',
    location: 'Jakar Dzong',
    image: bumthang,
    description: 'Most amazing Tshechu in Bhutan.',
  },
  {
    name: 'Mongar Tshechu',
    date: 'March 27-29, 2025',
    location: 'Mongar Dzong',
    image: mongar,
    description: 'Most amazing Tshechu in Bhutan.',
  },
];

const Festivals = () => {
  

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} p={4}>
      {festivals.map((festival) => (
        <CardRoot key={festival.name} borderWidth="1px" borderRadius="lg" boxShadow="md">
          <CardHeader>
            <Image  loading="lazy"
              src={festival.image}
              alt={festival.name}
              objectFit="cover"
              width="100%"
              height="200px"
              borderRadius="lg"
            />
          </CardHeader>
          <CardBody>
            <Heading size="md" mb={2}>{festival.name}</Heading>
            <Text fontSize="sm" color="gray.600" mb={2}>
              {festival.date} | {festival.location}
            </Text>
            <Text>{festival.description}</Text>
          </CardBody>
        </CardRoot>
      ))}
    </SimpleGrid>
  );
};

export default Festivals;
