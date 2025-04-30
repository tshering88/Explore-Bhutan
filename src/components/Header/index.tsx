import { Box, Heading, Image, Flex } from '@chakra-ui/react';
import bhutanflag from '../../assets/bhutanflag.png';

const Header = () => {
  return (
    <Box bg="green.500" px={8} py={4}>
      <Flex align="center" justify="center" gap={6}>
        <Image
          src={bhutanflag}
          boxSize="100px"
          borderRadius="full"
          objectFit="cover"
        />
        <Heading color="white" size="3xl">
          Explore Bhutan
        </Heading>
      </Flex>
    </Box>
  );
};

export default Header;
