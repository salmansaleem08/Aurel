export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-4 md:px-8">
      <a
        href="#top"
        className="font-serif text-lg tracking-tight text-foreground md:text-xl"
      >
        Aurel <span className="font-sans text-sm font-light text-muted">studio</span>
      </a>
      <nav
        aria-label="Primary"
        className="hidden items-center gap-6 text-sm font-light text-muted md:flex"
      >
        <a href="#top" className="transition-colors hover:text-foreground">
          Home
        </a>
        <a href="#products" className="transition-colors hover:text-foreground">
          Products
        </a>
        <a href="#about" className="transition-colors hover:text-foreground">
          About
        </a>
        <a href="#contact" className="transition-colors hover:text-foreground">
          Contact
        </a>
      </nav>
    </header>
  );
}
