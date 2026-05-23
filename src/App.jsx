import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Programs from '@/components/sections/Programs'
import Marquee from '@/components/sections/Marquee'
import Trainers from '@/components/sections/Trainers'
import Pricing from '@/components/sections/Pricing'
import Contact from '@/components/sections/Contact'

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Marquee />
        <Trainers />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
