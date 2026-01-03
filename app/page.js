
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import BestSelling from "../components/BestSelling";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      {/* Scroll buffer */}
      <div className="h-10  bg-coffee" />

      <Navbar />
      <Hero />
      <Feature />
      <BestSelling />
      <Testimonial />
      <Footer />
    </main>
  );
}
