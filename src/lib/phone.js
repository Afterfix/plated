// Normalise an Indian phone string to a wa.me / tel-friendly digit string.
//   "+91 77363 34443" -> "917736334443"
//   "081294 30421"    -> "918129430421"  (drop trunk 0, add country code)
export function waDigits(raw = "") {
  let d = raw.replace(/\D/g, "");
  if (d.startsWith("0")) d = d.slice(1);
  if (d.length === 10) d = "91" + d;
  return d;
}

export const telHref = (raw) => `tel:+${waDigits(raw)}`;

export function waHref(raw, text = "") {
  const base = `https://wa.me/${waDigits(raw)}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
