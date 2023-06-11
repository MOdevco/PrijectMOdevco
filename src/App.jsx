import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import NotFount from './pages/404/notFount'
import Home from './pages/home/home'
import Ichimlik from './pages/ichimlik/ichimlik'
import Admin from './pages/modevcoadminpanel/admin'
import Modevcoadmin from './pages/modevcoadminpanel/modevcoadmin'
import Register from './pages/register/register'
import Salat from './pages/salat/salat'
import Shirinlik from './pages/shirinlik/shirinlik'

function App() {

  return (
    <Box>
      <Box >
        <Navbar />
      </Box>
      <Box>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/ichimlik' element={<Ichimlik />}></Route>
            <Route path='/shirinlik' element={<Shirinlik />}></Route>
            <Route path='/salat' element={<Salat />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/modevcoadmin' element={<Modevcoadmin />}></Route>
            <Route path='*' element={<NotFount />}></Route>
        </Routes>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default App
