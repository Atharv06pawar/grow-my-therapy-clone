import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import BlogGrid from "@/components/BlogGrid";
import SubscribeSection from "@/components/SubscribeSection";


export default function BlogPage() {
  return (
    <main>
      <Header />

      <BlogHero />
      <BlogGrid />
      <SubscribeSection />

      <Footer />
    </main>
  );
}
