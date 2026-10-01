export function Mark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="16" cy="16" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="16" cy="16" r="1.7" fill="currentColor" />
    </svg>
  );
}
