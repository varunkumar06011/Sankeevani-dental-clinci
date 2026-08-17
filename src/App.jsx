import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Services from './components/Services';
import FeaturedServices from './components/FeaturedServices';
import WhyChooseUs from './components/WhyChooseUs';
import ClinicExperience from './components/ClinicExperience';
import Gallery from './components/Gallery';
import AppointmentCTA from './components/AppointmentCTA';
import Location from './components/Location';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <FeaturedServices />
        <WhyChooseUs />
        <ClinicExperience />
        <Gallery />
        <AppointmentCTA />
        <Location />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}

export default App;