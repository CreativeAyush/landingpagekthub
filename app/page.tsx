import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Integrations } from "@/components/sections/Integrations";
import { Features } from "@/components/sections/Features";
import { UseCases } from "@/components/sections/UseCases";
import { Dashboards } from "@/components/sections/Dashboards";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="bg-[#020410] min-h-screen selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Integrations />
      <Features />
      <UseCases />
      <Dashboards />
      <FAQ />

      {/* Footer CTA */}
      <section className="py-24 text-center bg-gradient-to-b from-[#020410] to-cyan-900/10 border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Launch your next onboarding in <br /><span className="text-cyan-500">days, not weeks.</span>
          </h2>
          <div className="flex justify-center gap-4">
            <a href="https://google.com" className="bg-cyan-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-cyan-400 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
