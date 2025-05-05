import { Box, Heading } from "@chakra-ui/react";

const VideoSection = () => {
  return (
   
    <Box marginBottom={'6'} marginLeft={'12px'} w={'98%'} mx={'auto'} mt={4} aspectRatio={16 / 9}>
        <Heading size={'3xl'} fontWeight={'bold'} textAlign={'center'} marginBottom={'6'}>Paro Tshechu</Heading>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/8jPQKhCBMLc"
        title="Paro Tshechu Festival"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
 
  )
}

export default VideoSection;
