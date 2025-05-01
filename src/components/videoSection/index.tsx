import { Box, Center, Heading } from "@chakra-ui/react";

const VideoSection = () => {
  return (
   
    <Box marginBottom={'6'} maxW="80%" mx="auto" mt={4} aspectRatio={16 / 9}>
        <Heading marginBottom={'6'}>Paro Tshechu</Heading>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/8jPQKhCBMLc"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
 
  )
}

export default VideoSection;
