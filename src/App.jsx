import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Forms from './components/Forms'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/projekt_szerkeszto" element={<Forms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
