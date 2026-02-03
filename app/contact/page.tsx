import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import AppointmentSection from "@/components/AppointmentSection";
import AddressSection from "@/components/AddressSection";
import SocialSection from "@/components/SocialSection";

export default function ContactPage() {
  return (
    <main>
      <Header />

      <ContactHero />
      <AppointmentSection />
      <AddressSection />
      <SocialSection />

      <Footer />
    </main>
  );
}
