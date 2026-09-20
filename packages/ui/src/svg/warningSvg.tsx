export function WarningSvg() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="h-6 w-6 text-amber-500"
        fill="none"
      >
        <path
          d="M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="128"
          y1="144"
          x2="128"
          y2="104"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="128" cy="180" r="12" fill="currentColor" />
      </svg>
    </div>
  );
}
