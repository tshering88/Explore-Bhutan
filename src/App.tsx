import { ToastContainer } from 'react-toastify'
import NavBar from './components/NavBar'
import AppRoutes from './components/AppRoutes'

import Header from './components/Header'

import Footer from './components/Footer'



const App = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      
      

      <AppRoutes/>

      <Footer/>

      <ToastContainer position='bottom-right' autoClose={5000}/>

    </div>
  )
}

export default App
