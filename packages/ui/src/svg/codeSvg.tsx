export function CodeSvg() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="h-6 w-6 text-purple-600"
        fill="none"
      >
        <polyline
          points="64 88 16 128 64 168"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="192 88 240 128 192 168"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="160"
          y1="40"
          x2="96"
          y2="216"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
