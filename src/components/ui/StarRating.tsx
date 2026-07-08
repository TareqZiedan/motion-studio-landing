type Props = {
  rating: number;
  className?: string;
};

export default function StarRating({ rating, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < rating ? "fill-accent" : "fill-white/15"}`}
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.62.99-5.8-4.21-4.1 5.82-.85z" />
        </svg>
      ))}
    </div>
  );
}
