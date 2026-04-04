import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import useScrollToTop from './hooks/useScrollToTop'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProblemPage from './pages/ProblemPage'
import HowItWorksPage from './pages/HowItWorksPage'
import FeaturesPage from './pages/FeaturesPage'
import TeamPage from './pages/TeamPage'
import MarketPage from './pages/MarketPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  useScrollToTop()
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/problem" element={<ProblemPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
