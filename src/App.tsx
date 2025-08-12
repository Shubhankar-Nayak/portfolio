import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];
  const [activeSection, setActiveSection] = useScrollSpy(sections);

  return (
    <div className='min-h-screen'>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero setActiveSection={setActiveSection} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer setActiveSection={setActiveSection} />
    </div>
  )
}

export default App
