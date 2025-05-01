import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const HeroBanner = () => {
    return (
        <Box
          bgImage="url('https://wallpapercat.com/w/full/d/5/3/615606-2500x1667-desktop-hd-bhutan-wallpaper-image.jpg')"
          bgSize="cover"
          position="center"
          height="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
          textAlign="center"
          px={4}
        >
          <VStack gap={4} >
            <Heading fontSize={["3xl", "4xl", "6xl"]}>Explore Bhutan</Heading>
            <Text fontSize={["md", "lg", "xl"]}>Where beauty meets peace.</Text>
          </VStack>
        </Box>
  );
};

export default HeroBanner;
