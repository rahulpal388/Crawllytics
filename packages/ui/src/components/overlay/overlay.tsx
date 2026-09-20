export function Overlay({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed h-full  inset-0 z-50 bg-black/50" onClick={onClose}>
      {children}
    </div>
  );
}
