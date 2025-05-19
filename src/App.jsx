import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import NavigationCards from './components/NavigationCards'
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <NavigationCards />
      <Footer />
    </Router>
  )
}