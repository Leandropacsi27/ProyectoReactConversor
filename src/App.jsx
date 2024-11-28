import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Section from './Components/Section/Section'
import SectionConversor from './Components/SectionConversor/SectionConversor'

const App = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>

    <div>
      <SectionConversor />
    </div>

    <div>
      <Section />
    </div>
    <div> 
      <Footer />
    </div>
    </>
  )
}

export default App