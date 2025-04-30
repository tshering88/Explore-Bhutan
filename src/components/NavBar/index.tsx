import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <div>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to='/destination' >Destination</NavLink>
        <NavLink to='/culturalfestival' >Cutural & Festival</NavLink>
        <NavLink to='/travelinfo' >TravelInfo</NavLink>
        <NavLink to='/contact' >Contact</NavLink>
    </div>
  )
}

export default NavBar
