import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"

function App() {
  return (
    // <>
    //   <Home />
    //   <h1>home</h1>
    // </>

    <Router basename="/">
      <Routes>
        {/* <Route path="/" Component={Home} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/about" Component={About} /> */}
      </Routes>
    </Router>


  )
}

export default App
