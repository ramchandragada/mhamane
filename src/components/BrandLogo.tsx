type BrandLogoProps = {
  className?: string;
  title?: string;
};

/**
 * Vishwa Associates VA monogram — geometric mark matching the brand logo.
 * Color via currentColor (set with text-* utilities).
 */
export function BrandLogo({
  className = "h-11 w-11",
  title = "Vishwa Associates",
}: BrandLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
    >
      <title>{title}</title>
      <path
        d="M14 16 L34 88 L50 16 L84 88"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinejoin="miter"
        strokeLinecap="square"
      />
      <path
        d="M44 52 H72"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="square"
      />
    </svg>
  );
}
