import { Box, Card, Center, Heading, Image } from "@chakra-ui/react"
import culture from '../../assets/culture.jpeg'

const Culture = () => {
  return (
    
    <Center>
      
    <Card.Root width="98%" flexDirection="row" overflow="hidden" padding='8px' marginTop={'32px'} px={'6px'} >
       
        <Image  loading="lazy" 
         src={culture}
         alt="Atsara"
         aspectRatio={4 / 3}
         width="300px"
         />
         
         <Box>
        <Card.Body gap='2'>
        
      <Heading style={{textAlign: 'left'}}>Cultural and Festivals</Heading>
      <Card.Description style={{textAlign: 'justify', lineHeight: '30px'}}>
      Bhutan's culture is deeply intertwined with
       its vibrant festivals, especially the religious 
       Tshechus, which showcase Buddhist rituals, masked 
       dances (Cham dances), and communal gatherings. 
       These festivals, held in dzongs (fortress monasteries) 
       and temples, are a significant part of Bhutanese identity, 
       offering blessings, social interaction, and a chance to 
       showcase traditional attire. Many festivals commemorate 
       Guru Rinpoche, the Indian saint who brought Buddhism to Bhutan.
      </Card.Description>
      </Card.Body>
      </Box>
    </Card.Root>
    </Center>
  )
}

export default Culture
          