import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login.jsx'
import Forgetpwd from './Components/Forgetpwd.jsx'
import Signup from './Components/Signup.jsx'
import Homepage from './Components/Homepage.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MainLayout from './Components/MainLayout.jsx'
import About from './Components/About.jsx'
import Services from './Components/Services.jsx'
import Portfolio from './Components/Portfolio.jsx'
import Contact from './Components/Contact.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Pages WITH Navbar & Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path='/about' element={<About />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path='/contact' element={<Contact />}/>
          </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgetpwd' element={<Forgetpwd/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
