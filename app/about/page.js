import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-cream text-coffee px-8 py-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-semibold">About Caffeine</h1>
          <p className="mt-6 max-w-2xl opacity-70 leading-relaxed">
            Caffeine was built on a simple idea: great coffee should feel
            familiar, comforting, and thoughtfully made. Every cup reflects
            our passion for quality and consistency.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
