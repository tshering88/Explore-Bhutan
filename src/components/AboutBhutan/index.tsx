import { Box, CardRoot, SimpleGrid, Text } from '@chakra-ui/react'


const AboutBhutan = () => {
  return (
    <CardRoot>
    <Box bg="gray.100" py={12} px={4}>
            <Box maxW="auto" mx="auto" textAlign="center">
              <Text fontSize="3xl" fontWeight="semibold" mb={8}>
                The Heart of Bhutan
              </Text>
              <SimpleGrid columns={{ base: 1, md: 3 }} spaceX={8}>
                <Box>
                  <Text fontSize="xl" fontWeight="bold" mb={2}>
                    Culture
                  </Text>
                  <Text>
                    Experience sacred festivals, traditional architecture, and timeless customs.
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="xl" fontWeight="bold" mb={2}>
                    Nature
                  </Text>
                  <Text>
                    Explore pristine forests, Himalayan peaks, and rare wildlife.
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="xl" fontWeight="bold" mb={2}>
                    Happiness
                  </Text>
                  <Text>
                    Discover a nation guided by Gross National Happiness, where peace prevails.
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>
          </Box>
          </CardRoot>
  )
}

export default AboutBhutan
