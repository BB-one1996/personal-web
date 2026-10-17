import About from "../sections/About.jsx"
import Capabilities from "../sections/Capabilities.jsx"
import Contact from "../sections/Contact.jsx"
import Hero from "../sections/Hero.jsx"
import Metrics from "../sections/Metrics.jsx"
import Projects from "../sections/Projects.jsx"
import Timeline from "../sections/Timeline.jsx"

function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Projects />
      <Capabilities />
      <Timeline />
      <About />
      <Contact />
    </>
  )
}

export default Home
