export function Contact() {
  return (
    <section id="contact" className="w-full px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs tracking-[0.2em] text-muted uppercase">
          Contact
        </p>
        <h2 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
          Write to the studio.
        </h2>
        <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-muted md:text-base">
          A name, an email, and a short note.
        </p>
        <p className="mt-6">
          <a
            href="mailto:hello@aurel.studio"
            className="text-sm text-accent transition-opacity hover:opacity-80"
          >
            hello@aurel.studio
          </a>
        </p>
      </div>
    </section>
  );
}
