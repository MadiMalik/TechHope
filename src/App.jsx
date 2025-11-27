import React from 'react'
import Banner from './components/Banner'
import AfghanistanContext from './components/AfghanistanContext'
import Project from './components/Project'
import Findings from './components/Findings'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page-shell">
      <main>
        <Banner />
        <AfghanistanContext />
        <Project />
        <Findings />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
