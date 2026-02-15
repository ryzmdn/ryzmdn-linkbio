export function encode(value: string) {
  return encodeURIComponent(value);
}

export function shareUrl(
  base: string,
  params: Record<string, string>
) {
  const search = new URLSearchParams(params);
  return `${base}?${search.toString()}`;
}
