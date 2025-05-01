
import { Route, Routes } from 'react-router-dom'


import Destination from '../../pages/Destination'
import CuturalFestival from '../../pages/CuturalFestival'
import TravelInfo from '../../pages/TravelInfo'
import Home from '../../pages/Home'

import Contact from '../../pages/Contact'



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
