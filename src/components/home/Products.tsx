export function Products() {
  return (
    <section
      id="products"
      className="w-full px-4 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs tracking-[0.2em] text-muted uppercase">
          Products
        </p>
        <h2 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
          What the cup
          <br />
          is made to do.
        </h2>
        <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-muted md:text-base">
          Noise cancellation in the seal, a copper-ringed driver, and the
          components between them.
        </p>
      </div>
    </section>
  );
}
