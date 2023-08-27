import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Profile from "./Pages/Profile"
import Dashboard from "./Pages/Dashboard"
import NotFound from "./Pages/NotFound"
import Event from "./Pages/Event"
import RenderingList from "./Pages/RenderingList"

const App = () => {
  return (
    <>
      <Router basename="/">
        <Routes>
          {/* <Route path="/" Component={Home} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/about" Component={About} />
          <Route path="/profile" element={<Dashboard />} />
          <Route path='/profile/:userid' element={<Profile />} />
          <Route path="/event" element={<Event title="event" />} />
          <Route path="/team" element={<Event title ="Team" />} />
          <Route path="/renderinglist" element={<RenderingList />} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </>
  )
}

export default App