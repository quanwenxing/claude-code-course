import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import CourseContent from '@/components/CourseContent'
import Benefits from '@/components/Benefits'
import Instructor from '@/components/Instructor'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CourseContent />
      <Benefits />
      <Instructor />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}