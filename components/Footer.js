import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="
        relative
        bg-coffee
        text-cream
        bg-[url('/assets/product3.jpg')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      <div className="absolute inset-0 bg-coffee/95"></div>

      <div className="relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 border-t border-cream/30">
          <div className="p-10 border-r border-cream/30">
            <div className="border border-cream/60 p-10 text-center">
              <h4 className="text-4xl font-semibold">Caffeine</h4>
            </div>

            <p className="mt-8 opacity-70 leading-relaxed">
              Enjoy Better And Better Quality Coffee With Caffeine.
            </p>
          </div>

          <div className="p-10 border-r border-cream/30">
            <h5 className="text-2xl font-semibold mb-6">Contact Us</h5>

            <div className="space-y-4 opacity-80">
              <p>Caffeine@Gmail.Com</p>
              <p>Call Us: (321) 562 - 57420</p>
              <p>Text Us: (321) 562 - 57420</p>
            </div>

            <p className="mt-10 opacity-70">
              39 Brooklyn Street
              <br />
              Covington, VA 244426
            </p>
          </div>

          <div className="p-10">
            <div className="relative border border-cream/60 h-44 mb-8 overflow-hidden">
              <Image
                src="/assets/footer.jpeg"
                alt="Coffee brewing"
                fill
                className="object-cover"
                priority={false}
              />
            </div>

            {/* <h5 className="text-2xl font-semibold mb-4">Follow Us</h5>

            <div className="flex gap-4">
              {["P", "I", "T", "F"].map((icon) => (
                <div
                  key={icon}
                  className="w-10 h-10 border border-cream/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-cream hover:text-coffee transition"
                >
                  {icon}
                </div>
              ))}
            </div> */}
          </div>
        </div>

        <div className="border-t border-cream/30 text-center py-6 text-sm opacity-70">
          Copyright © {new Date().getFullYear()} WebDevii
        </div>
      </div>
    </footer>
  );
}
