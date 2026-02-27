import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FloatingActions from './components/FloatingActions'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'        
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
        <FloatingActions />
      </BrowserRouter>
    </div>

  )
}

export default App