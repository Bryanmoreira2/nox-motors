const OFFSETS = [0, 45, 90, 135, 180, 225, 270, 315];

interface ChevronPatternProps {
  className?: string;
  /** Quantas setas omitir do início (lado esquerdo). */
  skip?: number;
}

/** Faixa decorativa de setas verdes usada nos cantos das seções. */
export function ChevronPattern({ className, skip = 0 }: ChevronPatternProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 360 64" className={className}>
      <g fill="#4fc63d" opacity=".85">
        {OFFSETS.slice(skip).map((x) => (
          <polygon
            key={x}
            points={`${30 + x},0 ${50 + x},0 ${22 + x},32 ${50 + x},64 ${30 + x},64 ${2 + x},32`}
          />
        ))}
      </g>
    </svg>
  );
}
