import React from 'react'
import './App.css'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
