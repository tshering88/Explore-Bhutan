import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  List,
  ListItem,
  Center,
  Flex,
  CardRoot,
  Image,
} from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

// ========== TypeScript Interfaces ==========

interface VisaInfoProps {
  country: string;
  visaProcess: string;
  dailyFee: string;
  tips: string[];
}

interface WeatherWidgetProps {
  region: string;
  season: string;
  weatherData: string;
}

interface FAQItem {
  question: string;
  answer: string;
  imageUrl?: string;
}

interface FAQAccordionProps {
  faqItems: FAQItem[];
}

interface PackingTipsListProps {
  tips: string[];
}

// ========== Components ==========

// VisaInfoSection Component
const VisaInfoSection: React.FC<VisaInfoProps> = ({
  country,
  visaProcess,
  dailyFee,
  tips,
}) => (
  <CardRoot mb={8} p={4} w={'10/12'}>
    <Heading size="lg" mb={2}>
      Visa Information for {country}
    </Heading>
    <Text mb={1}>
      <Text as="span" fontWeight="semibold">Visa Process:</Text> {visaProcess}
    </Text>
    <Text mb={4}>
      <Text as="span" fontWeight="semibold">Daily Fee:</Text> {dailyFee}
    </Text>
    <Box>
      <Text fontWeight="semibold" mb={2}>Travel Tips:</Text>
      <List.Root spaceX={2}>
        {tips.map((tip, index) => (
          <ListItem key={index}>{tip}</ListItem>
        ))}
      </List.Root>
    </Box>
  </CardRoot>
);

// WeatherWidget Component
const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  region,
  season,
  weatherData,
}) => (
  <CardRoot mb={8} p={4} w={'10/12'}>
    <Heading size="lg" mb={2}>
      Weather in {region} during {season}
    </Heading>
    <List.Root spaceX={2} mt={2}>
      {weatherData.split('\n').map((line, index) => (
        <ListItem key={index}>{line.replace(/^- /, '')}</ListItem>
      ))}
    </List.Root>
    <Image
      src="https://www.esikkimtourism.in/bhutan/wp-content/uploads/2019/11/haa-valley-in-june-boxx.jpg"
      alt={`Spring in ${region}`}
      mt={4}
      borderRadius="md"
      maxW="50%"
      objectFit="cover"
      
    />
  </CardRoot>
);

// FAQAccordion Component
const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqItems }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndices(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <Box mb={8} p={4} w={'10/12'}>
      <Heading size="lg" mb={4}>
        Frequently Asked Questions
      </Heading>
      <Box>
        {faqItems.map((item, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <Box
              key={index}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="md"
              mb={2}
              p={4}
            >
              <h2>
                <Flex
                  onClick={() => toggleItem(index)}
                  justifyContent="space-between"
                  alignItems="center"
                  px={4}
                  py={2}
                >
                  <Box textAlign="left" fontWeight="semibold">
                    {item.question}
                  </Box>
                  <Box
                    transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                    transition="transform 0.3s ease"
                  >
                    <FaChevronDown />
                  </Box>
                </Flex>
              </h2>
              <Box pb={4}>
                <Text>{item.answer}</Text>
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    alt="Currency image"
                    boxSize="50%"
                    borderRadius="10px"
                    mt={4}
                    objectFit="cover"
                  />
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

// PackingTipsList Component
const PackingTipsList: React.FC<PackingTipsListProps> = ({ tips }) => (
  <CardRoot mb={8} p={4} w={'10/12'}>
    <Heading size="lg" mb={2}>
      Packing Tips
    </Heading>
    <List.Root mt={2} px={8}>
      {tips.map((tip, index) => (
        <ListItem key={index}>{tip}</ListItem>
      ))}
    </List.Root>
  </CardRoot>
);

const TravelInfoPage: React.FC = () => {
  return (
    <Center bg="gray.50" minH="100vh" px={4}>
      <Container maxW="container.md" py={10} bg="white" boxShadow="md" borderRadius="lg">
        <Heading size="2xl" fontWeight="bold" mb={10} textAlign="center">
          Travel Info Page
        </Heading>

        <VisaInfoSection
          country="Bhutan"
          visaProcess="Apply online through the official Bhutan-Visas portal. After submission, schedule a biometric appointment at your local consulate or visa center."
          dailyFee="The daily Sustainable Development Fee (SDF) for tourist travel in Bhutan is $100 per person per night for non-Indian nationals. Children between 6 and 12 years old pay half the fee ($50 per day), and children under 5 are exempt."
          tips={[
            'Apply at least 4 weeks before travel.',
            'Carry printouts of hotel bookings and travel insurance.',
            'Double-check your passport validity (must be valid for at least 6 months).',
          ]}
        />

        <WeatherWidget
          region="Bhutan"
          season="Spring"
          weatherData={`- Spring in Bhutan (March to May) is one of the most beautiful times to visit.
- Average temperatures range from 12°C to 18°C, making it pleasantly cool.
- The valleys come alive with blooming rhododendrons and other wildflowers.
- Expect occasional light rain, especially in April, so packing a light waterproof jacket and umbrella is advisable.
- Days are generally sunny with clear skies, ideal for trekking and sightseeing in places like Paro, Thimphu, and Punakha.`
}
        />

        <FAQAccordion
          faqItems={[
            {
              question: 'Do I need a visa?',
              answer:
                "Yes, unless you're from a country with a visa waiver agreement. Check the Bhutan Visa portal for your country's requirements.",
            },
            {
              question: "What's the local currency?",
              answer:
                'Bhutan uses the Ngultrum (Nu). Credit cards are accepted in many areas, but cash is recommended for rural travel.',
              imageUrl:
                'https://www.dailybhutan.com/pub_files/01070001363473/the-history-of-money-in-bhutan_8526.jpg', // Image URL
            },
            {
              question: 'Is tap water safe to drink?',
              answer:
                "Tap water isn't safe to drink. Stick to bottled or properly boiled/filtered water.",
            },
            {
              question: 'What language is spoken?',
              answer:
                'Dzongkha is the official language. English is also widely spoken in tourist areas.',
            },
          ]}
        />

        <PackingTipsList
          tips={[
            'Pack light — cobblestone streets make large rolling bags difficult.',
            'Bring a universal travel adapter.',
            'Include comfortable walking shoes.',
            'Carry a reusable water bottle.',
            'Download offline maps or a translation app.',
            'Pack Light – Stick to essentials; use packing cubes for better organization.',
            'Carry a First Aid Kit – Include medications, band-aids, and motion sickness tablets.',
            'Bring Power Adapters & Chargers – Check plug types for the destination country.',
          ]}
        />
      </Container>
    </Center>
  );
};

export default TravelInfoPage;
