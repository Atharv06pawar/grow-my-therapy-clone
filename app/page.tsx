import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GetInTouch from "@/components/GetInTouch";
import Specialties from "@/components/Specialties";
import SplitSection from "@/components/SplitSection";
import Intro from "@/components/Intro";
import FAQ from "@/components/FAQ";
import Qualifications from "@/components/Qualifications";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <GetInTouch />
      <Specialties />
      <SplitSection />
      <Intro />
      <FAQ />
      <Qualifications />
      <CTA />
      <Footer />
    </main>
  );
}
