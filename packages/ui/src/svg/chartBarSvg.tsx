export function ChartBarSvg() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="h-6 w-6 text-green-600"
        fill="none"
      >
        <polyline
          points="48 208 48 136 96 136"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <line
          x1="224"
          y1="208"
          x2="32"
          y2="208"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <polyline
          points="96 208 96 88 152 88"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <polyline
          points="152 208 152 40 208 40 208 208"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
