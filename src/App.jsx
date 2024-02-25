import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import MyWorks from './components/MyWorks'
import NavBar from './components/NavBar'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <MyWorks />
      <Contact />
      <Footer />
    </>
  )
}

export default App
