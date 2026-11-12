import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Solutions from './components/Solutions'
import Testimonials from './components/Testimonials'
import Clients from './components/Clients'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <Testimonials />
        <Clients />
      </main>
      <Footer />
    </>
  )
}
