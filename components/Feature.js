import Image from "next/image";

export default function Feature() {
  return (
    <section className="bg-cream px-8 py-32">
      <div className="max-w-6xl mx-auto space-y-40">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20">
          <div className="relative flex justify-start">
            <div className="relative rotate-[-4deg]">
              <div className="absolute inset-0 border border-coffee/40 -z-10 translate-x-4 translate-y-4"></div>
              <div
                className="   relative
                              w-[320px] h-[320px]
                              sm:w-[420px] sm:h-[420px]
                              md:w-[520px] md:h-[520px]
                              flex items-center justify-center
                            "
              >
                <Image
                  src="/assets/coffeefeauture2.png"
                  alt="Cup of coffee"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-semibold">Coffee Heaven</h3>
            <p className="mt-6 max-w-md text-sm leading-relaxed opacity-70">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s.
            </p>

            <button className="mt-8 flex items-center gap-2 bg-coffee text-cream px-6 py-3 text-sm">
              View All <span className="text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Jean’s Coffee */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20">
          {/* Text */}
          <div className="order-2 md:order-1">
            <h3 className="text-4xl font-semibold">Jean’s Coffee</h3>
            <p className="mt-6 max-w-md text-sm leading-relaxed opacity-70">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s.
            </p>

            <button className="mt-8 flex items-center gap-2 bg-coffee text-cream px-6 py-3 text-sm">
              View All <span className="text-lg">→</span>
            </button>
          </div>

          {/* Image */}
          <div className="relative flex justify-end order-1 md:order-2">
            <div className="relative rotate-[4deg]">
              <div className="absolute inset-0 border border-coffee/40 -z-10 -translate-x-4 translate-y-4"></div>
              <div
                className="
                              relative
                              w-[320px] h-[320px]
                              sm:w-[420px] sm:h-[420px]
                              md:w-[520px] md:h-[520px]
                              flex items-center justify-center
                            "
              >
                <Image
                  src="/assets/coffeefeauture1.png"
                  alt="Cup of coffee"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
