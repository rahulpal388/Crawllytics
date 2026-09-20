type StatusStartNumber = 1 | 2 | 3 | 4 | 5;

const statusData: Record<
  StatusStartNumber,
  {
    color: string;
    backgroundColor: string;
  }
> = {
  1: {
    color: "var(--color-status-1xx)",
    backgroundColor: "var(--color-status-1xx-bg)",
  },
  2: {
    color: "var(--color-status-2xx)",
    backgroundColor: "var(--color-status-2xx-bg)",
  },
  3: {
    color: "var(--color-status-3xx)",
    backgroundColor: "var(--color-status-3xx-bg)",
  },
  4: {
    color: "var(--color-status-4xx)",
    backgroundColor: "var(--color-status-4xx-bg)",
  },
  5: {
    color: "var(--color-status-5xx)",
    backgroundColor: "var(--color-status-5xx-bg)",
  },
};

export function StatusCodeBadge({ statusCode }: { statusCode: number }) {
  const st = statusData[Math.floor(statusCode / 100) as StatusStartNumber];
  return (
    <>
      <div
        className="caption-xs w-fit rounded-lg px-4 py-[1.6px]"
        style={{
          backgroundColor: st.backgroundColor,
          color: st.color,
        }}
      >
        {statusCode}
      </div>
    </>
  );
}
