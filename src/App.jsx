import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import NavigationCards from './components/NavigationCards'
import Footer from './components/Footer'
import About from './pages/About'
import Events from './pages/Events'
import Committee from './pages/Committee'
import Goals from './pages/Goals'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <NavigationCards />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>
      <Footer />
    </Router>
  )
}