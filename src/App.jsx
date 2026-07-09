import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Flavours from './pages/Flavours'
import MenuCover from './pages/MenuCover'
import Menu from './pages/Menu'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
        <main className='main-content'>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/flavours' element={<Flavours />} />
          <Route path="/menu" element={<MenuCover />}/>
          <Route path="/menu/list" element={<Menu />}/>
        </Routes>
        </main>
      <Footer />
    </div>
  )
}

export default App
