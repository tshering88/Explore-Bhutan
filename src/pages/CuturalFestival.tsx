import { Box, Heading } from "@chakra-ui/react"
import AccordionSection from "../components/AccordionSection"
import Culture from "../components/Culture"
import Festivals from "../components/Festivals"
import VideoSection from "../components/videoSection"



const CuturalFestival = () => {
  return (
    
    <Box w={'90%'} mx={'auto'}>
      <Heading size={'3xl'} fontWeight={'bold'} textAlign={'center'} mt={'15px'}>Culture and Festivals Information</Heading>
      <Culture/>
      <Festivals/>
      <AccordionSection/>
      <VideoSection/>
    </Box>
  )
}

export default CuturalFestival
