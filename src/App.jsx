import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import TimeLine from './components/TimeLine'
// import SkillCarousel from './components/SkillCarousel'
import Skills from './components/Skills'
import MyWorks from './components/MyWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500);
  }, [])

  return (
    <>
      {
        loading ? (
          <ClimbingBoxLoader
            color={"#fff"}
            loading={loading}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
            style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh", backgroundColor: "#1C1E53" }}
          />)
          : (
            <>
              <NavBar />
              <Home />
              <About />
              <TimeLine />
              {/* <SkillCarousel /> */}
              <Skills />
              <MyWorks />
              <Contact />
              <Footer />
            </>
          )
      }
    </>
  )
}

export default App
