import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-corporate-sports.jpg";
import badmintonImg from "@/assets/event-badminton.jpg";
import offsiteImg from "@/assets/event-offsite.jpg";
import seminarImg from "@/assets/event-seminar.jpg";
import cricketImg from "@/assets/sport-cricket.jpg";
import padelImg from "@/assets/sport-padel.jpg";
import footballImg from "@/assets/sport-football.jpg";
import trophyImg from "@/assets/moment-trophy.jpg";
import crowdImg from "@/assets/moment-crowd.jpg";
import kitImg from "@/assets/moment-kit.jpg";
import shuttleImg from "@/assets/detail-shuttle.jpg";
import scoreboardImg from "@/assets/detail-scoreboard.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const sports = [
  { name: "Box Cricket", img: cricketImg },
  { name: "Football", img: footballImg },
  { name: "Badminton", img: badmintonImg },
  { name: "Padel", img: padelImg },
  { name: "Pickleball", img: padelImg },
  { name: "Tennis", img: shuttleImg },
  { name: "Basketball", img: footballImg },
  { name: "Table Tennis", img: shuttleImg },
];

const eventTypes = [
  {
    tag: "01 / Offsites",
    title: "Corporate Offsites",
    body: "Full-day team retreats with multi-sport tournaments, meals, and dedicated event managers across our Gurgaon venues.",
    img: offsiteImg,
    meta: "20–2000 pax · 4–10 hrs",
  },
  {
    tag: "02 / R&R",
    title: "Rewards & Recognition",
    body: "Themed league nights, MVP trophies, live scoreboards and photo/video coverage — turn quarterly R&R into a moment your team remembers.",
    img: trophyImg,
    meta: "Themed nights · Trophies · Recap film",
  },
  {
    tag: "03 / Conferences",
    title: "Seminar & Conference Breakouts",
    body: "Add a high-energy sports break to your conference agenda. Indoor venues, curated formats, 60–180 min slots that fit your schedule.",
    img: seminarImg,
    meta: "60–180 min · Indoor · On-site",
  },
];

const logos = ["Google", "Deloitte", "EY", "Microsoft", "American Express", "PwC", "HCL", "Genpact"];

const marqueeItems = [
  "Turnkey offsites",
  "★",
  "12+ Gurgaon venues",
  "★",
  "Certified referees",
  "★",
  "Live scoreboards",
  "★",
  "Drone recap films",
  "★",
  "20 to 2000 pax",
  "★",
  "Dedicated event lead",
  "★",
];

function Landing() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || "").trim().slice(0, 100),
      company: String(form.get("company") || "").trim().slice(0, 100),
      email: String(form.get("email") || "").trim().slice(0, 200),
      phone: String(form.get("phone") || "").trim().slice(0, 20),
      teamSize: String(form.get("teamSize") || ""),
      eventType: String(form.get("eventType") || ""),
      date: String(form.get("date") || ""),
      notes: String(form.get("notes") || "").slice(0, 500),
    };
    console.log("[sportyzo-lead]", payload);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-black">S</span>
            <span className="text-lg font-semibold tracking-tight">Sportyzo <span className="text-muted-foreground font-normal">Corporate</span></span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#events" className="hover:text-foreground transition">Events</a>
            <a href="#sports" className="hover:text-foreground transition">Sports</a>
            <a href="#gallery" className="hover:text-foreground transition">Gallery</a>
            <a href="#proof" className="hover:text-foreground transition">Clients</a>
          </nav>
          <a href="#enquiry" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
            Get a quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" width={1600} height={1100} className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-20 pb-24 lg:grid-cols-[1.15fr_1fr] lg:pt-32 lg:pb-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Now booking Q1 2027 offsites — 12+ venues in Gurgaon
            </span>
            <h1 className="mt-6 text-5xl leading-[0.95] font-normal sm:text-6xl lg:text-7xl">
              Corporate sports events,<br />
              <em className="text-primary">played like a final.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Sportyzo runs turnkey offsites, R&R tournaments and conference breakouts for teams of 20 to 2000 — across 12+ premium venues in Gurgaon. One partner. Zero logistics on your plate.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#enquiry" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-primary hover:scale-[1.02] transition">
                Plan your event →
              </a>
              <a href="#events" className="rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-surface transition">
                See what we do
              </a>
            </div>

            {/* Hero image mosaic */}
            <div className="mt-12 grid grid-cols-3 gap-3 max-w-lg">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-border">
                <img src={cricketImg} alt="Box cricket" loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-110" />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-border translate-y-6">
                <img src={trophyImg} alt="Trophy" loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-110" />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-border">
                <img src={padelImg} alt="Padel" loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-110" />
              </div>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["500+", "Teams hosted"],
                ["12+", "Gurgaon venues"],
                ["4.9★", "326 reviews"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl text-primary">{n}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* LEAD FORM */}
          <div id="enquiry" className="relative lg:sticky lg:top-24 lg:self-start">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl" />
            <div className="rounded-3xl border border-border bg-surface/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl">Request a proposal</h2>
                <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  Reply in 2 hrs
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about your team. We'll send a costed plan with venue options within 2 working hours.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-primary/40 bg-primary/10 p-6 text-center">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground text-2xl">✓</div>
                  <h3 className="mt-4 font-display text-2xl">You're in the queue.</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Our corporate team will reach out shortly. For anything urgent, WhatsApp us on +91 8527736149.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field name="name" label="Full name" required placeholder="Priya Sharma" />
                    <Field name="company" label="Company" required placeholder="Acme Inc." />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field name="email" type="email" label="Work email" required placeholder="you@company.com" />
                    <Field name="phone" type="tel" label="Phone" required placeholder="+91 …" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label>Event type</Label>
                      <select name="eventType" required className={selectCls} defaultValue="">
                        <option value="" disabled>Select…</option>
                        <option>Offsite / team retreat</option>
                        <option>R&R tournament</option>
                        <option>Seminar / conference breakout</option>
                        <option>Corporate league (multi-week)</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <Label>Team size</Label>
                      <select name="teamSize" required className={selectCls} defaultValue="">
                        <option value="" disabled>Select…</option>
                        <option>20–50</option>
                        <option>50–150</option>
                        <option>150–500</option>
                        <option>500+</option>
                      </select>
                    </div>
                  </div>
                  <Field name="date" type="date" label="Preferred date" />
                  <div>
                    <Label>Anything else?</Label>
                    <textarea
                      name="notes"
                      rows={3}
                      maxLength={500}
                      placeholder="Preferred sports, venue area, budget indication…"
                      className={`${inputCls} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-primary py-3.5 text-sm font-bold text-primary-foreground glow-primary hover:scale-[1.01] disabled:opacity-60 transition"
                  >
                    {loading ? "Sending…" : "Get my proposal →"}
                  </button>
                  <p className="text-[11px] text-muted-foreground">
                    By submitting you agree to be contacted by Sportyzo about your event. No spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-primary text-primary-foreground overflow-hidden">
        <div className="flex whitespace-nowrap py-4 animate-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((it, i) => (
            <span key={i} className="mx-6 font-display text-2xl">{it}</span>
          ))}
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="border-b border-border bg-surface/40">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by teams from
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {logos.map((l) => (
              <span key={l} className="font-display text-xl text-muted-foreground/70">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">What we run</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">One partner for every kind of corporate sports moment.</h2>
          </div>
          <p className="text-sm text-muted-foreground md:max-w-sm">
            From a 90-minute conference break to a two-day sports offsite — we handle format design, venues, referees, catering, scoreboards and recap videos.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {eventTypes.map((e, i) => (
            <article key={e.title} className={`group relative overflow-hidden rounded-3xl border border-border bg-surface transition hover:border-primary/60 ${i === 1 ? "lg:translate-y-8" : ""}`}>
              <div className="aspect-[4/5] overflow-hidden">
                <img src={e.img} alt={e.title} width={1200} height={1500} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-primary">{e.tag}</p>
                <h3 className="mt-2 text-2xl">{e.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{e.body}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-4">
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{e.meta}</span>
                  <a href="#enquiry" className="text-sm font-semibold text-primary">Plan this →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FULL-BLEED SPLIT */}
      <section className="relative border-y border-border">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px] overflow-hidden">
            <img src={crowdImg} alt="Crowd cheering" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-background/60 lg:bg-gradient-to-r lg:from-transparent lg:to-background/80" />
          </div>
          <div className="relative flex items-center bg-surface/40 p-10 lg:p-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">The full production</p>
              <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">
                We don't rent you a ground.<br />
                <em className="text-primary">We produce your finals.</em>
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Live commentary, LED scoreboards, walk-out music, camera crew, trophy ceremonies, edited recap films the same week. Every match feels like a broadcast.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
                <Stat n="120+" l="Events / year" />
                <Stat n="98%" l="Repeat rate" />
                <Stat n="2 hr" l="Reply SLA" />
                <Stat n="0" l="Vendors to chase" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPORTS TILES */}
      <section id="sports" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">The playbook</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">8 formats.<br />Every skill level.<br />One brief.</h2>
            <p className="mt-5 text-muted-foreground">
              Mix and match sports across a single day. Beginners, veterans and everyone in between — our referees run brackets that keep every team in the game until the final whistle.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <img src={scoreboardImg} alt="Live scoreboard" loading="lazy" className="w-full object-cover" />
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
            {sports.map((s, i) => (
              <li key={s.name} className={`group relative overflow-hidden rounded-2xl border border-border transition hover:border-primary/60 ${i % 3 === 0 ? "row-span-2" : ""}`}>
                <img src={s.img} alt={s.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="relative flex h-full min-h-[140px] flex-col justify-between p-4">
                  <span className="font-display text-sm text-primary/90">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg font-semibold">{s.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GALLERY / MOMENTS */}
      <section id="gallery" className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">Moments</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">The bits your team will still talk about in Q4.</h2>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">Every event goes home with a highlight film, a shared album, and a trophy that lives on someone's desk for a year.</p>
          </div>
          <div className="mt-12 grid grid-cols-6 gap-3 md:gap-4 auto-rows-[120px] md:auto-rows-[160px]">
            <GalleryCell src={trophyImg} alt="Trophy" className="col-span-3 row-span-2" />
            <GalleryCell src={cricketImg} alt="Cricket" className="col-span-3 row-span-3" />
            <GalleryCell src={shuttleImg} alt="Shuttlecock" className="col-span-2 row-span-2" />
            <GalleryCell src={kitImg} alt="Kit" className="col-span-1 row-span-2" />
            <GalleryCell src={crowdImg} alt="Crowd" className="col-span-3 row-span-2" />
            <GalleryCell src={padelImg} alt="Padel" className="col-span-3 row-span-2" />
            <GalleryCell src={footballImg} alt="Football" className="col-span-2 row-span-2" />
            <GalleryCell src={scoreboardImg} alt="Scoreboard" className="col-span-4 row-span-2" />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">Why Sportyzo Corporate</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">The operational muscle behind India's smoothest corporate sports days.</h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Turnkey, end-to-end", d: "Format design, permissions, referees, kits, medals, catering, MC, DJ, drone recap — one PO covers it.", n: "01" },
            { t: "12+ premium venues", d: "Indoor and outdoor grounds across Sector 49, 51, 62, 65, 66, 70, 71, 72 and beyond.", n: "02" },
            { t: "Dedicated event lead", d: "A single named manager from brief to recap deck. No group chats with 14 vendors.", n: "03" },
            { t: "Certified referees", d: "Neutral, tournament-grade officiating so every match feels like it matters.", n: "04" },
          ].map((f) => (
            <div key={f.t} className="group bg-background p-8 transition hover:bg-surface">
              <div className="font-display text-4xl text-primary/60 group-hover:text-primary transition">{f.n}</div>
              <h3 className="mt-6 font-display text-2xl">{f.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROOF */}
      <section id="proof" className="border-t border-border bg-surface/40 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20">
          <img src={kitImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              { q: "Sportyzo handled our 400-person offsite end-to-end. Referees, kits, meals, recap video — all of it. Our CEO called it our best offsite in 6 years.", a: "Head of People, Fintech scale-up" },
              { q: "We did a badminton + box cricket R&R night for the sales team. Slick brackets, real trophies, everyone stayed till the last match.", a: "Sales Director, SaaS" },
              { q: "Added a 2-hour sports break to our annual conference. Attendee NPS went from 62 to 84 vs last year.", a: "Marketing Lead, Consulting firm" },
            ].map((t, i) => (
              <figure key={i} className="rounded-3xl border border-border bg-background/90 backdrop-blur p-8">
                <div className="text-primary">★★★★★</div>
                <blockquote className="mt-4 font-display text-xl leading-snug">"{t.q}"</blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">— {t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={trophyImg} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <h2 className="text-5xl sm:text-7xl">
            Let's build your team's<br /><em className="text-primary">best day</em> of the year.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Share your brief — team size, date window, sports of interest. A costed plan lands in your inbox within 2 working hours.
          </p>
          <a href="#enquiry" className="mt-10 inline-flex rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground glow-primary hover:scale-[1.02] transition">
            Request a proposal →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-black">S</span>
              <span className="text-lg font-semibold">Sportyzo Corporate</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              A division of Dominic Sports Private Limited. Turnkey corporate sports events across Gurgaon since 2021.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Talk to us</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li><a href="tel:+918527736149" className="hover:text-primary">+91 85277 36149</a></li>
              <li><a href="mailto:sportyzowork@gmail.com" className="hover:text-primary">sportyzowork@gmail.com</a></li>
              <li className="text-muted-foreground">6 AM – 12 AM · Mon–Sun</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Venues</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Sector 49, 51, 62, 65, 66, 70, 71, 72 · Gurugram, Haryana
            </p>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          © 2021–2026 Dominic Sports Private Limited. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background/50 p-4">
      <div className="font-display text-3xl text-primary">{n}</div>
      <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{l}</div>
    </div>
  );
}

function GalleryCell({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-border ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition";
const selectCls = `${inputCls} appearance-none pr-8`;

function Label({ children }: { children: React.ReactNode }) {
  return <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">{children}</label>;
}
function Field({ name, label, type = "text", required, placeholder }: {
  name: string; label: string; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}{required && <span className="text-primary"> *</span>}</Label>
      <input name={name} type={type} required={required} placeholder={placeholder} maxLength={200} className={inputCls} />
    </div>
  );
}
