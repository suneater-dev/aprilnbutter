import BromaStyleHero from '@/components/sections/BromaStyleHero'
import BromaStyleGrid from '@/components/sections/BromaStyleGrid'
import BromaSearchSection from '@/components/sections/BromaSearchSection'

export default function HomePage() {
  return (
    <main className="pt-20">
      <BromaStyleHero />
      <BromaStyleGrid />
      <BromaSearchSection />
    </main>
  )
}