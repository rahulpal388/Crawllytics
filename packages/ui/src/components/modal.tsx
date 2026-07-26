export function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        onClick={onClose}
      >
        <div className="rounded-lg bg-white p-4 " onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </>
  );
}
