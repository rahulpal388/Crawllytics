export function PdfSvg() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="h-6 w-6 text-blue-600"
        fill="none"
      >
        <polyline
          points="216 152 184 152 184 208"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="208"
          y1="184"
          x2="184"
          y2="184"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48,192H64a20,20,0,0,0,0-40H48v56"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M112,152v56h16a28,28,0,0,0,0-56Z"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48,112V40a8,8,0,0,1,8-8h96l56,56v24"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="152 32 152 88 208 88"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
