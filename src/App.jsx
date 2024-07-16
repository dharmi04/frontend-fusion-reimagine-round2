import ErrorBoundary from "./Components/ErrorBoundary"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"


function App() {
 

  return (
    <>
    <Navbar />
    <ErrorBoundary >
      <Home />
      
    </ErrorBoundary>
     {/* <Home /> */}
    </>
  )
}

export default App
