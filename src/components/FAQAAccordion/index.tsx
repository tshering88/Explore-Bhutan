import { useState } from 'react'; // Correct import for useState
import { Box, Heading, Text, Flex, CardRoot } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

const faqItems = [
    {
      question: 'What is Bhutan known for?',
      answer: 'Bhutan is known for its stunning landscapes, rich cultural heritage, and commitment to preserving its environment and happiness index.',
      imageUrl: 'https://www.esikkimtourism.in/bhutan/wp-content/uploads/2019/11/haa-valley-in-june-boxx.jpg',
    },
    {
      question: 'What is the best time to visit Bhutan?',
      answer: 'The best time to visit Bhutan is during the spring (March to May) and autumn (September to November) for pleasant weather and clear skies.',
    },
    {
      question: 'Do I need a visa to travel to Bhutan?',
      answer: 'Yes, all tourists except Indian, Bangladeshi, and Maldivian nationals require a visa to visit Bhutan.',
    },
    {
      question: 'What is the local currency in Bhutan?',
      answer: 'The local currency is the Bhutanese Ngultrum (BTN), which is pegged to the Indian Rupee. Indian Rupees are also widely accepted.',
    },
    {
      question: 'Is Bhutan safe for tourists?',
      answer: 'Yes, Bhutan is considered one of the safest countries in the world with low crime rates and a welcoming attitude towards tourists.',
    },
    {
      question: 'What languages are spoken in Bhutan?',
      answer: 'The official language is Dzongkha, but English is widely spoken, especially in tourism and business sectors.',
    },
    {
      question: 'Are there any cultural etiquette rules I should follow?',
      answer: 'Yes. Dress modestly, remove shoes before entering religious sites, and always ask for permission before taking photos of people or inside temples.',
    },
    {
      question: 'How is the internet and mobile connectivity in Bhutan?',
      answer: 'Internet and mobile networks are available in most towns and tourist areas, but may be limited or slower in remote regions.',
    },
  ];
  

const FAQAccordion = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndices(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <CardRoot m={'4'}>
    <Box mb={8} p={4} w="100%" >
      <Heading size="lg" mb={4}>Frequently Asked Questions</Heading>
      {faqItems.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <Box
            key={`${item.question}-${index}`} // Use question + index for a unique key
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            mb={2}
            p={4}
        
          >
            <Flex
              onClick={() => toggleItem(index)}
              justifyContent="space-between"
              alignItems="center"
              cursor="pointer"
              
            >
              <Text fontWeight="semibold">{item.question}</Text>
              <Box
                as={FaChevronDown}
                transition="transform 0.3s ease"
                transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
               
              />
            </Flex>
            {isOpen && (
              <Box mt={2}>
                <Text>{item.answer}</Text>
                
                  
            
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
    </CardRoot>
  );
};

export default FAQAccordion;
