type OliveLogoProps = {
  className?: string
}

export function OliveLogo({ className }: OliveLogoProps) {
  return (
    <div className={`flex items-center gap-1.5 ${className ?? ""}`}>
      <svg
        viewBox="0 0 40 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-auto"
        aria-hidden="true"
      >
        {/* Leaf */}
        <path
          d="M20 4 C 22 1, 27 0.5, 30 2 C 28.5 5, 25 7, 21 6.5 Z"
          fill="oklch(0.55 0.15 130)"
        />
        {/* Stem */}
        <path
          d="M20 6 C 20 4, 20 7, 20 10"
          stroke="oklch(0.32 0.06 130)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* Pear / olive body */}
        <path
          d="M20 9 C 11 9, 6 17, 6 26 C 6 35, 12 42, 20 42 C 28 42, 34 35, 34 26 C 34 17, 29 9, 20 9 Z"
          fill="oklch(0.78 0.1 120)"
        />
        {/* Highlight */}
        <ellipse cx="14" cy="20" rx="2.5" ry="4" fill="oklch(0.88 0.08 120)" opacity="0.6" />
      </svg>
      <span className="font-serif text-2xl tracking-tight text-primary">
        Olive
      </span>
    </div>
  )
}
