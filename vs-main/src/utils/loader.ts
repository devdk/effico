const VALID_WIDTHS = [60, 120, 240, 360, 720, 1080];

function getClosestWidth(requestedWidth: number) {
  return VALID_WIDTHS.reduce((prev, curr) =>
    Math.abs(curr - requestedWidth) < Math.abs(prev - requestedWidth)
      ? curr
      : prev
  );
}

export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
}) {
  if (!src) return '';

  // ✅ Leave local or non-CDN images untouched
  if (!src.includes('cdn.virtuoso.live')) {
    return src;
  }

  // ✅ Leave local or non-CDN images untouched
  if (src.includes('/ChatData/')) {
    return src;
  }

  const closestWidth = getClosestWidth(width);

  const url = new URL(src);
  const [path, ext] = url.pathname.split(/\.(?=[^/.]+$)/);
  url.pathname = `${path}_w${closestWidth}.${ext}`;

  return url.toString();
}
