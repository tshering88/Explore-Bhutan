import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  List,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Center,
} from '@chakra-ui/react';

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

interface FAQAccordionProps {
  faqItems: { question: string; answer: string }[];
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
  <Box mb={8}>
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
      <List spacing={2}>
        {tips.map((tip, index) => (
          <ListItem key={index}>{tip}</ListItem>
        ))}
      </List>
    </Box>
  </Box>
);

// WeatherWidget Component
const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  region,
  season,
  weatherData,
}) => (
  <Box mb={8}>
    <Heading size="lg" mb={2}>
      Weather in {region} during {season}
    </Heading>
    <List spacing={2} mt={2}>
      {weatherData.split('\n').map((line, index) => (
        <ListItem key={index}>{line.replace(/^- /, '')}</ListItem>
      ))}
    </List>
  </Box>
);

// FAQAccordion Component
const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqItems }) => (
  <Box mb={8}>
    <Heading size="lg" mb={4}>
      Frequently Asked Questions
    </Heading>
    <Accordion allowToggle>
      {faqItems.map((item, index) => (
        <AccordionItem key={index} border="1px solid" borderColor="gray.200" borderRadius="md" mb={2}>
          <AccordionButton px={4} py={2}>
            <Box flex="1" textAlign="left" fontWeight="semibold">
              {item.question}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text>{item.answer}</Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  </Box>
);

// PackingTipsList Component
const PackingTipsList: React.FC<PackingTipsListProps> = ({ tips }) => (
  <Box mb={8}>
    <Heading size="lg" mb={2}>
      Packing Tips
    </Heading>
    <List spacing={2} mt={2}>
      {tips.map((tip, index) => (
        <ListItem key={index}>{tip}</ListItem>
      ))}
    </List>
  </Box>
);

// ========== Main Page ==========

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
          dailyFee="1000 for short stays (up to 90 days)"
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
- Days are generally sunny with clear skies, ideal for trekking and sightseeing in places like Paro, Thimphu, and Punakha.`}
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
          ]}
        />
      </Container>
    </Center>
  );
};

export default TravelInfoPage;
