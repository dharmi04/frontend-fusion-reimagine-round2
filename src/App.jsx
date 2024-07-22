import AboutUs from "./Components/AboutUs"
import ErrorBoundary from "./Components/ErrorBoundary"
import Hero from "./Components/Hero"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"


function App() {
 

  return (
    <>
    <Navbar />
     <Home />
    {/* <ErrorBoundary >
      <Home />
      
    </ErrorBoundary> */}
    <AboutUs />
    
     {/* <Hero /> */}
    </>
  )
}

export default App
