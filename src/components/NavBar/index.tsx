import { Box,Flex, Stack} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const navLink=[
  {name: 'Home', path:'/'},
  {name: 'Destination', path:'/destination'},
  {name: 'Culture & Festival', path:'/culturalfestival'},
  {name: 'TravelInfo', path:'/travelinfo'},
  {name: 'Contact', path:'/contact'}
]

const NavBar = () => {
  return (
    
      <Box bg="tomato"  p="5" color="white" _hover={{color: "yellow"}}>
      <Flex gap="6"  justify='center' >
      <Stack direction='row' gap='9' h='19'>
  

        {navLink.map((nav)=>(
                <NavLink to={nav.path} >{nav.name}</NavLink>
        ))}


        </Stack>
      </Flex>
      
        </Box>
  )
}

export default NavBar
