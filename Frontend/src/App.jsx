import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Trainner from './Components/Trainner'
import ContactUs from './Components/ContactUs'
import Why from './Components/Why'
import Info from './Components/Info'
import Footer from './Components/Footer'
import LogIn from './Components/LogIn'
import SignIn from './Components/SignIn'
import Dasboard from './Components/Dasborad/Dasboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      


      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Header />}></Route>
          <Route path='/why' element={<Why />}></Route>
          <Route path='/trainner' element={<Trainner />}></Route>
          <Route path='/contact' element={<ContactUs />}></Route>
          <Route path='/login' element={<LogIn />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
        </Routes>
        <Info />
        <Footer />
        {/* <Dasboard /> */}
      </Router>
    </>
  )
}

export default App
