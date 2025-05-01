import { Box } from "@chakra-ui/react"
import AccordionSection from "../components/AccordionSection"
import Culture from "../components/Culture"
import Festivals from "../components/Festivals"
import VideoSection from "../components/videoSection"



const CuturalFestival = () => {
  return (
    <Box w={'90%'} mx={'auto'}>
      <Culture/>
      <Festivals/>
      <AccordionSection/>
      <VideoSection/>
    </Box>
  )
}

export default CuturalFestival
