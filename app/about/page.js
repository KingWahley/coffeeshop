"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission");

  const content = {
    mission: {
      title: "We Craft Coffee With Purpose",
      text: `Our mission is to deliver consistently great coffee by sourcing
      quality beans, respecting time-tested brewing methods, and creating
      a space that feels honest, welcoming, and familiar.`,
    },
    vision: {
      title: "Our Vision For Coffee",
      text: `We envision Caffeine as a place where tradition meets modern
      comfort. A brand that grows without losing its roots, serving
      coffee that feels personal, reliable, and thoughtfully made.`,
    },
    values: {
      title: "What We Stand For",
      text: `Quality over shortcuts. Consistency over trends. People over
      profit. These values guide how we source, brew, serve, and grow
      every single day.`,
    },
  };

  return (
    <main className="bg-cream text-coffee">
      <Navbar />

      {/* TOP SECTION */}
      <section className="px-8 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-[500px] h-[380px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/footer.jpeg"
                alt="Caffeine team member"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h1 className="text-5xl font-semibold leading-tight">
              {content[activeTab].title}
            </h1>

            <p className="mt-6 max-w-xl opacity-70 leading-relaxed">
              {content[activeTab].text}
            </p>

            {/* TABS */}
            <div className="mt-10 flex gap-6 border-b border-coffee/20 pb-4">
              <button
                onClick={() => setActiveTab("mission")}
                className={`text-sm pb-2 ${
                  activeTab === "mission"
                    ? "font-semibold border-b-2 border-coffee"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                Mission
              </button>

              <button
                onClick={() => setActiveTab("vision")}
                className={`text-sm pb-2 ${
                  activeTab === "vision"
                    ? "font-semibold border-b-2 border-coffee"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                Vision
              </button>

              <button
                onClick={() => setActiveTab("values")}
                className={`text-sm pb-2 ${
                  activeTab === "values"
                    ? "font-semibold border-b-2 border-coffee"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                Our Values
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM SECTION */}
      <section className="px-8 pb-32 mt-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Take A Closer Look At Our Craft
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm opacity-70 leading-relaxed">
            From sourcing to serving, every step matters. This is how we bring
            intention, care, and consistency into every cup.
          </p>

          <div className="mt-16 relative w-full h-[280px] md:h-[420px] rounded-3xl overflow-hidden">
            <Image
              src="/assets/coffeecraft.webp"
              alt="Caffeine team at work"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-coffee text-cream flex items-center justify-center text-xl shadow-lg">
                ▶
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
