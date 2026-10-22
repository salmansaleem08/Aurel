export function Footer() {
  return (
    <footer className="flex flex-col items-start justify-between gap-4 border-t border-white/10 px-4 py-10 md:flex-row md:items-center md:px-8">
      <span className="text-sm font-light text-muted">Aurel studio</span>
      <a
        href="#top"
        className="text-sm font-light text-muted transition-colors hover:text-foreground"
      >
        Back to film
      </a>
    </footer>
  );
}
