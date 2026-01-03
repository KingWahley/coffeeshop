import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-coffee text-cream overflow-hidden ">
      <div className="max-w-6xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <h1 className="text-5xl sm:text-5xl lg:text-6xl leading-[1.15] font-semibold">
            Discover The
            <br />
            Art Of Perfect
            <br />
            Coffee
          </h1>

          <p className="mt-8 max-w-md text-sm leading-relaxed opacity-80">
            Experience The Rich And Bold Flavors Of Our Exquisite Coffee Blends,
            Crafted To Awaken Your Senses And Start Your Day Right.
          </p>

          <div className="mt-10 flex gap-6">
            <button className="flex items-center gap-2 bg-cream text-coffee px-6 py-3 text-sm">
              Order Now
              <span className="text-lg">→</span>
            </button>

            <button className="border border-cream/70 px-6 py-3 text-sm">
              Explore More
            </button>
          </div>

          <div className="mt-16 flex gap-14">
            <div>
              <p className="text-3xl font-semibold">50+</p>
              <p className="text-xs opacity-70 mt-1">ITEM OF COFFEE</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">20+</p>
              <p className="text-xs opacity-70 mt-1">ORDER RUNNING</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">2k+</p>
              <p className="text-xs opacity-70 mt-1">HAPPY CUSTOMER</p>
            </div>
          </div>
        </div>

        <div className="relative hidden md:flex justify-end">
          <span className="absolute top-10 right-0 text-[180px] font-bold opacity-[0.04] select-none">
            Coffee
          </span>

          <div className="relative w-[520px] h-[520px] flex items-center justify-center">
            <Image
              src="/assets/pngwing.com.png"
              alt="Cup of coffee"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
