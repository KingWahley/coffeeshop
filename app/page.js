import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import BestSelling from "../components/BestSelling";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <div className="h-12   flex justify-center Items-center p-4  bg-white">
        <p className="text-coffee">-- FREE SHIPPING ON ORDERS $50.00+ --</p>
      </div>
      <Navbar />
      <Hero />
      <Feature />
      <BestSelling />
      <Testimonial />
      <Footer />
    </main>
  );
}
