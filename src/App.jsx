import React from 'react'
import Banner from './components/Banner'
import VideoSection from './components/VideoSection'    
import AfghanistanContext from './components/AfghanistanContext'
import Project from './components/Project'
import Findings from './components/Findings'
import MeetTeam from './components/MeetTeam'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page-shell">
      <main>
        <Banner />
        <VideoSection />
        <AfghanistanContext />
        <Project />
        <Findings />
        <MeetTeam />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
