import Header from './components/header'
import Bio from './components/bio'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Contactinfo from './components/contactinfo'
import Contact from './components/contact'

import './App.css'

const App=()=>(
  <div className='main-container'>
    <Header />
    <Bio />
    <About />
    <Skills />
    <Projects/>
    <Contact />
    <Contactinfo />
  </div>
)

export default App;
