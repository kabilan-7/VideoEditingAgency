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
import About from './components/About/About'
import AboutUs from './components/About/About'
import Copyright from './components/CopyWrite/CopyWrite'
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
      <section id='about'>
        <AboutUs/>
      </section>
      <Copyright/>
    </div>
  )
}

export default App