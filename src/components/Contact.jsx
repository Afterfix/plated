import { useState } from "react";
import { contact } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";
import { telHref, waHref } from "../lib/phone.js";

function WaIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.54 2 2.08 6.46 2.08 11.96c0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm4.53 12.02c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43l-.48-.01c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.25 3.74 2.5 1.07 2.5.71 2.95.67.45-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  );
}

function BranchCard({ b, active, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex min-w-[230px] max-w-[250px] shrink-0 snap-start flex-col gap-1.5 rounded-[22px] border-2 border-dashed p-4 text-left transition ${
        active
          ? "border-chili bg-chili/8 ring-2 ring-chili/30"
          : "border-chili/45 bg-white/40 hover:border-chili/70"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-display text-xl uppercase leading-none text-chili">{b.name}</h4>
        <span className="flex shrink-0 items-center gap-1 rounded-full bg-ink px-2 py-0.5 text-[11px] font-semibold text-cream">
          <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 text-sun" fill="currentColor" aria-hidden="true">
            <path d="m12 3 2.9 6 6.6.9-4.8 4.5 1.2 6.6L12 18l-5.9 3 1.2-6.6L2.5 9.9 9 9l3-6Z" />
          </svg>
          {b.rating}
        </span>
      </div>
      <p className="text-xs text-muted">{b.area}</p>
      <p className="text-xs leading-relaxed text-ink/70">{b.note}</p>
      {b.phone ? (
        <span className="mt-1 flex items-center gap-3 text-xs font-semibold">
          <a
            href={waHref(b.phone, `Hi ${b.name}!`)}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-[#1EA952] hover:opacity-70"
          >
            <WaIcon className="h-3.5 w-3.5" /> WhatsApp
          </a>
          <a
            href={telHref(b.phone)}
            onClick={(e) => e.stopPropagation()}
            className="text-chili hover:opacity-70"
          >
            {b.phone}
          </a>
        </span>
      ) : null}
    </button>
  );
}

export default function Contact() {
  const [branch, setBranch] = useState(0);
  const selected = contact.branches[branch];

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.website?.value) return; // honeypot
    const f = e.target;
    const msg = [
      `Hi ${selected.name}!`,
      f.name.value && `Name: ${f.name.value}`,
      f.email.value && `Email: ${f.email.value}`,
      f.mobile.value && `Mobile: ${f.mobile.value}`,
      f.company.value && `Company: ${f.company.value}`,
      f.message.value && `Message: ${f.message.value}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waHref(selected.phone || contact.branches[0].phone, msg), "_blank", "noopener");
  }

  return (
    <section id="contact" className="container-x scroll-mt-28 py-10 sm:py-12">
      <SectionHeading
        eyebrow={contact.eyebrow}
        title={contact.title}
        blurb={contact.blurb}
        garnish={contact.garnish}
        titleClassName="!text-[clamp(2rem,5.5vw,4.25rem)]"
      />

      {/* branches — pick one to send your message to */}
      <div className="mt-6">
        <div className="flex items-center gap-3">
          <span className="eyebrow">Our branches</span>
          <span className="h-px flex-1 bg-chili/25" />
          <span className="font-display text-lg uppercase tracking-wide text-muted">
            {contact.branchesTitle} · tap to select
          </span>
        </div>

        <div className="menu-scroll mt-3 flex snap-x gap-3 overflow-x-auto pb-3">
          {contact.branches.map((b, i) => (
            <BranchCard key={b.name} b={b} active={i === branch} onSelect={() => setBranch(i)} />
          ))}
        </div>
      </div>

      <div className="mt-6 grid items-start gap-8 lg:grid-cols-[1.4fr_0.6fr]">
        <form onSubmit={handleSubmit} className="card-dashed p-5 sm:p-6">
          <div className="grid gap-3.5 sm:grid-cols-2">
            {contact.fields.map((f) => (
              <label key={f.name} className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-ink/80">{f.label}</span>
                <input
                  name={f.name}
                  type={f.type}
                  required={f.name === "name" || f.name === "mobile"}
                  placeholder={f.placeholder}
                  autoComplete="off"
                  className="field !py-2.5"
                />
              </label>
            ))}
          </div>
          <label className="mt-3.5 flex flex-col gap-1.5">
            <span className="text-sm font-medium text-ink/80">Tell us about your requirement</span>
            <textarea
              name="message"
              rows={2}
              placeholder="Details description"
              className="field resize-none !py-2.5"
            />
          </label>

          <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

          <button type="submit" className="btn-primary mt-4 w-full !py-3 !bg-[#1EA952] hover:!bg-[#178A43]">
            <WaIcon className="h-5 w-5" /> Send to {selected.name} on WhatsApp
          </button>
          <p className="mt-2 text-center text-sm text-muted">{contact.note}</p>
        </form>

        <div className="relative hidden flex-col items-center lg:flex">
          <img
            src={contact.image}
            alt="A chef"
            loading="lazy"
            className="max-h-[240px] w-auto object-contain"
          />
          <p className="mt-2 max-w-[16ch] text-center font-script text-2xl leading-tight text-chili">
            {contact.scribble}
          </p>
        </div>
      </div>
    </section>
  );
}
