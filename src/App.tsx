import { ToastContainer } from 'react-toastify'
import NavBar from './components/NavBar'
import AppRoutes from './components/AppRoutes'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <NavBar/>
      <AppRoutes/>
      <Footer/>

      <ToastContainer/>
    </div>
  )
}

export default App
