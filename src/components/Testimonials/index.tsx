import { Box, Text, SimpleGrid, VStack } from "@chakra-ui/react";


const testimonials = [
    {
      name: "Emily from Canada",
      quote: "Bhutan stole my heart. The people, the peace, the nature — simply magical.",
    },
    {
      name: "Raj from India",
      quote: "It’s a spiritual escape. Everything feels pure and untouched.",
    },
    {
      name: "Liam from UK",
      quote: "A perfect blend of adventure and tranquility.",
    },
    {
      name: "Sophie from Australia",
      quote: "Bhutan’s charm is indescribable — from lush forests to warm smiles everywhere.",
    },
    {
      name: "Carlos from Spain",
      quote: "A hidden gem that makes you slow down and appreciate life’s simplicity.",
    },
    {
      name: "Aiko from Japan",
      quote: "Every moment in Bhutan felt spiritual and grounding. I found peace here.",
    },
    {
      name: "Marcus from Germany",
      quote: "From the Himalayas to the monasteries — Bhutan offers a timeless experience.",
    },
    {
      name: "Zara from UAE",
      quote: "A journey that transformed me. Bhutan’s culture and people are truly special.",
    },
    {
      name: "Chloe from France",
      quote: "The breathtaking views and untouched beauty made it my favorite destination ever.",
    },
    
  ];

const Testimonials = () => {

  return (
    <Box  py={12}  w={'100%'}>
      <Box>
        <Text fontSize="3xl" fontWeight="bold" mb={10} textAlign="center">
          What Travelers Say
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {testimonials.map((t, idx) => (
            <Box
              key={idx}
              p={6}
              borderRadius="2xl"
              shadow="lg"
            >
              <VStack spaceX={4} textAlign="center">
                <Text fontStyle="italic" color="gray.600">
                  “{t.quote}”
                </Text>
                <Text fontWeight="semibold" color="gray.800">
                  — {t.name}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Testimonials;
