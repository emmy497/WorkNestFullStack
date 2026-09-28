function FeaturesSection() {
  return (
    <section>
      <div className="mx-auto mb-12 flex max-w-xl flex-col gap-4 text-center">
        <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-3xl">
          The opposite of shouting into a void.
        </h2>
        <p className="text-base leading-relaxed text-ink-soft">
          A job board hosts a form and hopes for the best. WorkNest sits between
          you and the company and does the work that usually goes missing.
        </p>
      </div>

      <div className="grid grid-cols-[1.2fr_1fr] grid-rows-2 gap-5 md:grid-cols-1">
        <div className="row-span-2 flex min-h-[340px] flex-col justify-end gap-3.5 rounded-2xl bg-navy p-8 text-white md:row-auto md:min-h-[280px]">
          <span className="text-sm text-[#a39dff]">// read by a human</span>
          <h3 className="text-2xl font-semibold leading-tight">
            Every application is actually reviewed.
          </h3>
          <p className="text-sm leading-relaxed text-[#b9b6cf]">
            Not parsed by an ATS hunting keywords — read, scored, and
            shortlisted by someone whose whole job is finding the right people
            for the role.
          </p>
        </div>

        <div className="flex flex-col gap-3.5 rounded-2xl border border-line bg-white p-8">
          <span className="text-sm text-violet">// no ghosting</span>
          <h3 className="text-xl font-semibold">
            You always know where you stand.
          </h3>
          <p className="text-sm leading-relaxed text-ink-soft">
            Your status moves in the open — submitted, reviewed, shortlisted,
            interviewing — and you hear from us either way.
          </p>
          <div className="mt-1 flex gap-1.5">
            <span className="h-[5px] flex-1 rounded-full bg-violet" />
            <span className="h-[5px] flex-1 rounded-full bg-violet" />
            <span className="h-[5px] flex-1 rounded-full bg-amber" />
            <span className="h-[5px] flex-1 rounded-full bg-line" />
            <span className="h-[5px] flex-1 rounded-full bg-line" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-amber p-8 text-center">
          <span className="font-display text-5xl font-bold text-[#3a2900]">
            72%
          </span>
          <p className="text-sm text-[#4a3300]">
            of shortlisted candidates reach an interview
          </p>
        </div>

        <div className="flex flex-col justify-center gap-3.5 rounded-2xl border border-line bg-white p-8">
          <span className="text-sm text-violet">// live roles only</span>
          <h3 className="text-xl font-semibold">Real, open roles.</h3>
          <p className="text-sm leading-relaxed text-ink-soft">
            If it's listed, a team is waiting to fill it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
