import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Dashboard from './pages/Dashboard'

import{Routes , Route} from 'react-router-dom'

const App = () => {
  return (
    <section>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </section>
  )
}

export default App