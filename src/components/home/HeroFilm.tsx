/**
 * Scroll-scrubbed WebP film hero.
 * Frames live in /public/frames/{expand,close,release,rotate}/*.webp
 * Implementation (canvas + scroll mapping) comes in the next pass.
 */
export function HeroFilm() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black"
      aria-label="Aurel scroll film"
    >
      <div className="pointer-events-none absolute inset-0 bg-black" />
      <div className="relative z-10 mx-auto max-w-md px-4 text-center md:max-w-xl">
        <p className="mb-3 text-xs tracking-[0.2em] text-muted uppercase">
          Aurel
        </p>
        <h1 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">
          Facing you.
        </h1>
        <p className="mt-4 text-sm font-light leading-relaxed text-muted md:text-base">
          Move across it to turn. Scroll, and the features take over.
        </p>
      </div>
    </section>
  );
}
