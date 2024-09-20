import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import { BackgroundLines } from './components/ui/background-lines'
import Nav from './components/Nav/Nav'
import './App.css'
import BackgroundVideo from './components/BackGroundVideo/BackgroundVideo'
import VideoGrid from './components/VideoGrid/VideoGrid'
import { TextGenerateEffect } from './components/ui/text-generate-effect'
import { BackgroundBeamsWithCollision } from './components/ui/background-beams-with-collision'
import StatsSection from './components/StatsSection/StatsSection'
const App = () => {
  return (
   <div>
    <Nav/>
    <HeroSection/>
    {/* <BackgroundVideo /> */}
    <VideoGrid/>
    <StatsSection/>
    <BackgroundLines/>
    {/* <BackgroundBeamsWithCollision/> */}
    
   </div>
  )
}

export default App