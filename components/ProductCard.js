import Image from "next/image";

export default function ProductCard({
  title,
  description,
  image,
  price,
  tags = [],
}) {
  return (
    <div className="bg-cream rounded-xl overflow-hidden shadow-sm">

      {/* Image */}
      <div className="relative h-[200px] bg-coffee flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-6 py-4 space-y-4">

        {/* Title + Favorite */}
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-semibold">{title}</h4>
          <div className="w-9 h-9 rounded-full border border-coffee/40 flex items-center justify-center cursor-pointer">
            ♥
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {tags.map(tag => (
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
          {description}
          <span className="text-coffee font-medium cursor-pointer"> See more</span>
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-2">
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
