import React from 'react'
import Cards from './Cards'
import CardComponent from './CardComponent'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Instagram from './pages/Instagram'
import Youtube from './pages/Youtube'
import VideoEditing from './pages/VideoEditing'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'

function HomeWithCards() {
  return (
    <div>
      <Home />
      {/* <Cards /> */}
    </div>
  )
}

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeWithCards />} />
          <Route path='/instagram' element={<Instagram />} />
          <Route path='/youtube' element={<Youtube />} />
          <Route path='/videoEditing' element={<VideoEditing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  )
}

export default App