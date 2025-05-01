import { Box } from "@chakra-ui/react"
import AboutBhutan from "../components/AboutBhutan"
import HeroBanner from "../components/HeroBanner"
import Testimonials from "../components/Testimonials"
import TopDestination from "../components/TopDestination"



const Home = () => {
  return (
    <Box w={'90%'} mx={'auto'}>
      <HeroBanner/>
      <TopDestination/>
      <AboutBhutan/>
      <Testimonials/>
    </Box>
  )
}

export default Home
