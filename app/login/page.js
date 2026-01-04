import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SignInPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-cream text-coffee px-8 py-32">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-semibold">Sign In</h1>
          <p className="mt-4 opacity-70">
            Access your account to manage orders and preferences.
          </p>

          <form className="mt-10 space-y-6">
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-coffee/40 px-4 py-3 bg-transparent outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-coffee/40 px-4 py-3 bg-transparent outline-none"
            />

            <button className="w-full bg-coffee text-cream py-3">
              Sign In
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
