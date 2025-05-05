import { useState, ChangeEvent } from "react";
import {Box, Text, Image, VStack, Heading, Flex, Input, Link, } from "@chakra-ui/react";
import buddhadordenma from '../../assets/buddhadordenma.jpg'
import punakhaa from '../../assets/punakhaa.jpg'
import wangduephodrangdzong from '../../assets/wangduephodrangdzong.jpg'
import phobjikha from '../../assets/phobjikha.jpg'
import bumthanga from '../../assets/bumthanga.jpg'
import notfound from '../../assets/notfound.webp'


interface Destination {
  title: string;
  image: string;
  description: string;
  region: string;
  link?: string;
}

const destinations: Destination[] = [
  {
    title: "Paro Taktsang",
    image:
      "https://www.tourmyindia.com/blog//wp-content/uploads/2022/10/Best-Places-to-Visit-in-Bhutan-Tourism.jpg",
    description:
      "Discover the awe-inspiring Paro Taktsang, Bhutan's iconic cliffside monastery nestled high above the Paro Valley.",
    region: "Western",
    link: "https://en.wikipedia.org/wiki/Paro_Taktsang",
  },
  {
    title: "Buddha Dordenma",
    image: buddhadordenma, 
    description:
      "Siddhartha Gautama, most commonly referred to as the Buddha, was a wandering ascetic and religious teacher.",
    region: "Western",
  },
  {
    title: "Punakha Dzong",
    image: punakhaa,
    description:
      "The Punakha Dzong is the administrative centre of Punakha District and one of its most majestic structures.",
    region: "Western",
  },
  {
    title: "Wangdue Phodrang Dzong",
    image: wangduephodrangdzong ,
    description: "Wangdue Phodrang District is a dzongkhag of central Bhutan.",
    region: "Central",
  },
  {
    title: "Phobjikha Valley",
    image: phobjikha,
    description:
      "The Phobjikha Valley is a vast U-shaped valley in central Bhutan, home to Gangteng Monastery.",
    region: "Central",
  },
  {
    title: "Bumthang",
    image: bumthanga,
    description:
      "Bumthang is the spiritual heartland of Bhutan with many sacred sites and monasteries.",
    region: "Central",
  },
];

const noInfoDestination: Destination = {
  title: "No Destination Found",
  image: notfound,
  description: "We couldn't find any destinations matching your search.",
  region: "N/A",
};




const DestinationCard = ({ dest }: { dest: Destination }) => (
  <Box
    maxW="sm"
    w="100%"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    p={4}
    boxShadow="md"
  >
    <Image
      src={dest.image}
      alt={dest.title}
      objectFit="cover"
      height="250px"
      width="100%"
    />
    <Box p={4}>
      <VStack align="start" gap={3}>
        <Heading size="md">{dest.title}</Heading>
        <Text fontSize="sm">{dest.description}</Text>
        {dest.link && (
          <Link
            href={dest.link}
            color="teal.500"
            fontWeight="bold"
          >
      
          </Link>
        )}
      </VStack>
    </Box>
  </Box>
);

const FilterDestinations = () => {
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredDestinations = destinations.filter((dest) =>
    dest.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={4}>
      <Flex justify="center" gap={4} mb={6} flexWrap="wrap">
        <Input
          width="300px"
          placeholder="Search by destination..."
          value={search}
          onChange={handleSearchChange}
        />
      </Flex>

      <Flex justify="center" gap={4} flexWrap="wrap">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((dest, index) => (
            <DestinationCard key={index} dest={dest} />
          ))
        ) : (
          <DestinationCard  dest={noInfoDestination} />
       
        )}
      </Flex>
    </Box>
  );
};

export default FilterDestinations;
