import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import UseCases from '@/components/UseCases'
import StepsByStep from '@/components/StepsByStep'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <UseCases />
      <StepsByStep />
      <Testimonials />
      <Footer />
    </main>
  )
}
