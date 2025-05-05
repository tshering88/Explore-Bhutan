import { Box, Heading, Image, Flex } from '@chakra-ui/react';
import flag from '../../assets/flag.png'

const Header = () => {
  return (
    <Box bg="green" px={8} py={4}>
      <Flex align="center" justify="center" gap={6}>
        <Image  loading="lazy"
          src={flag}
          boxSize="100px"
          borderRadius={10}
          objectFit="cover"
        />
        <Heading color="#FFA500" size={'7xl'}>
          Explore Bhutan
        </Heading>
      </Flex>
    </Box>
  );
};

export default Header;
