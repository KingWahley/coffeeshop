import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function FacilitiesPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-cream text-coffee px-8 py-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-semibold">Our Facilities</h1>
          <p className="mt-6 max-w-2xl opacity-70 leading-relaxed">
            From comfortable seating to modern brewing equipment, our spaces
            are designed to help you relax, work, and enjoy every moment.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
