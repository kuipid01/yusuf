import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import PackagesSection from './components/PackagesSection'
import UmrahPlansSection from './components/UmrahPlansSection'
import TestimonialsSection from './components/TestimonialsSection'
import BookingContactSection from './components/BookingContactSection'
import Footer from './components/Footer'
import './App.css'
import ServicesPackages from './components/ServicesNew'
import DestinationsTours from './components/Destination-Tours'
import ContactTrust from './components/ContactTrust'
import AboutOwner from './components/AboutOwner'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesPackages />
      <DestinationsTours />
      <PackagesSection />
      <UmrahPlansSection />
      <TestimonialsSection />
      {/* <BookingContactSection /> */}
      <ContactTrust />
      <AboutOwner />
      <Footer />
    </div>
  )
}

export default App
