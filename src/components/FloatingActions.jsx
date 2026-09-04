import { brand, contact } from "../data/content.js";
import { telHref, waHref } from "../lib/phone.js";

// primary contact number = first branch that has one
const primary =
  contact.branches?.find((b) => b.phone)?.phone || contact.branches?.[0]?.phone || "";

export default function FloatingActions() {
  if (!primary) return null;

  return (
    <div
      className="fixed right-4 z-40 flex flex-col gap-2.5 sm:right-7 sm:gap-3"
      style={{ bottom: "max(1.5rem, calc(env(safe-area-inset-bottom, 0px) + 0.9rem))" }}
    >
      <a
        href={waHref(primary, `Hi ${brand.name}! I'd like to book a table.`)}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-onyx text-gold shadow-lg shadow-black/25 transition hover:-translate-y-0.5 hover:shadow-xl sm:h-14 sm:w-14"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm0 18.2h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.09.81.83-3.01-.2-.31a8.24 8.24 0 0 1-1.26-4.4c0-4.55 3.7-8.25 8.26-8.25 2.2 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.42 5.84c0 4.56-3.7 8.26-8.25 8.26Zm4.53-6.18c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43l-.48-.01c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.25 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
        </svg>
      </a>

      <a
        href={telHref(primary)}
        aria-label="Call us"
        className="grid h-12 w-12 place-items-center rounded-full bg-gold text-onyx shadow-lg shadow-black/25 transition hover:-translate-y-0.5 hover:shadow-xl sm:h-14 sm:w-14"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 5c0 8 7 15 15 15l1-4-5-2-2 2a12 12 0 0 1-5-5l2-2-2-5-4 1Z" />
        </svg>
      </a>
    </div>
  );
}
