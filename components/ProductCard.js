import Image from "next/image";

export default function ProductCard({ title, price = "$45" }) {
  return (
    <div className="bg-cream rounded-2xl overflow-hidden shadow-sm">

      {/* Image */}
      <div className="relative h-[220px] bg-coffee flex items-center justify-center">
        <span className="text-cream/60 text-sm">Image</span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">

        {/* Title + Favorite */}
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-semibold">{title}</h4>
          <div className="w-9 h-9 rounded-full border border-coffee/40 flex items-center justify-center cursor-pointer">
            ♥
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-2">
          {["Bold", "Classic", "Hot"].map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full border border-coffee/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm opacity-70 leading-relaxed">
          Rich and carefully crafted coffee made to deliver depth, aroma,
          and satisfaction in every sip.
          <span className="text-coffee font-medium cursor-pointer"> See more</span>
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4">
          <span className="text-3xl font-semibold">{price}</span>

          <button className="bg-coffee text-cream px-6 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition">
            Order Now
            <span className="text-lg">→</span>
          </button>
        </div>

      </div>
    </div>
  );
}
