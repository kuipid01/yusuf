import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import UmrahPlansSection from './components/UmrahPlansSection'
import HajjSection from './components/HajjSection'
import RamadanSection from './components/RamadanSection'
import TestimonialsSection from './components/TestimonialsSection'
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
      <UmrahPlansSection />
      <RamadanSection />
      <HajjSection />
      <TestimonialsSection />
      {/* <BookingContactSection /> */}
      <ContactTrust />
      <AboutOwner />
      <Footer />
    </div>
  )
}

export default App
