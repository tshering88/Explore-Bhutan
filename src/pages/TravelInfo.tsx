import React, { useState } from 'react';

import {
  Container,
  Heading,
  Center,
} from '@chakra-ui/react';



import VisaInfoSection from '../components/VisaInfoSection';
import WeatherWidget from '../components/WeatherWidget';
import FAQAccordion from '../components/FAQAAccordion';

const TravelInfoPage: React.FC = () => {
  return (
    <Center bg="gray.50" minH="100vh" px={4}>
      <Container maxW="container.md" py={10} bg="white" boxShadow="md" borderRadius="lg" my={'4'}>
        <Heading size="3xl" fontWeight="bold" mb={10} textAlign="center">
          Travel Info
        </Heading>

        <VisaInfoSection
          
        />
        <WeatherWidget/>
        <FAQAccordion/>
      </Container>
    </Center>
  );
};

export default TravelInfoPage;
