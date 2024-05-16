import React from 'react'
import Herosection from './homescreen/Herosection'

import Testimonial from './homescreen/Testimonial'
//import { SwipeCarousel } from './homescreen/Swipegallery'
import About from './About'
import Gallery from './Gallery'
import Achivements from './Achivements'
import Contact from './Contact'
import Players from './Players'

const Home = () => {

  return (
    <div id='home'>

      <Herosection />
      <About />
      <Gallery />
      <Achivements />
      <Players />
      <Testimonial />
      <Contact />

    </div>
  )
}

export default Home
