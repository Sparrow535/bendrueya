import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/footer/footer.jsx'
import Navbar from './components/navbar/navbar.jsx'
import ScrollToTop from './components/scrolltotop/scrolltotop.jsx'
import ContactPage from './pages/contactpage/contactpage.jsx'
import FaqPage from './pages/faqpage/faqpage.jsx'
import ItineraryPage from './pages/itinerarypage/itinerarypage.jsx'
import HomePage from './pages/homepage/homepage.jsx'
import PackagesPage from './pages/packagespage/packagespage.jsx'

function AppContent() {
  const { pathname } = useLocation()

  return (
    <div className="app-shell">
      <Navbar key={pathname} />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/tours/:slug" element={<ItineraryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  )
}

export default App
