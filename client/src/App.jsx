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
import ServicesSection from './components/ServiceCard/ServiceCard'
import { InfiniteMovingCards } from './components/ui/infinite-moving-cards'
import Feedback from './components/FeedBack/Feedback'
const App = () => {
  
  
  return (
    <div>
      <Nav />
      {/* Add id="home" to scroll to this section when clicking "Home" */}
      <section id="home">
          <HeroSection />
      </section>
      {/* Other sections */}

      <section>
      <Feedback/>
      </section>
      <section>
        <VideoGrid />
      </section>

      <section>
        <StatsSection />
      </section>

      {/* Add id="services" to scroll to this section when clicking "Services" */}
      <section id="services">
        <ServicesSection />
      </section>
    </div>
  )
}

export default App