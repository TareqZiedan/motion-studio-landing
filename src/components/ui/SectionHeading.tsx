type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: Props) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`section-heading flex flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow ? (
        <span className="section-eyebrow inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="section-title max-w-2xl font-display text-3xl font-semibold leading-[1.1] text-text sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="section-description max-w-xl text-base text-text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
