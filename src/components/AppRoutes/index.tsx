
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/home'
import Destination from '../../pages/Destination'
import CuturalFestival from '../../pages/CuturalFestival'
import TravelInfo from '../../pages/TravelInfo'
import Contact from '../../pages/contact'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/destination' element={<Destination/>} />
        <Route path='/culturalfestival' element={<CuturalFestival/>} />
        <Route path='/travelinfo' element={<TravelInfo/>} />
        <Route path='/contact' element={<Contact/>} />
      
    </Routes>
  )
}

export default AppRoutes
