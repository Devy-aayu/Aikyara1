import Link from "next/link";

export function Logo({ compact = false }) {
  return (
    <Link className="brand" href="/" aria-label="Aikyara home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" role="img">
          <path d="M8 35 22 9l5 9-9 17H8Z" />
          <path d="m22 35 9-17 9 17H22Z" />
          <path d="M20 35h10" />
        </svg>
      </span>
      {!compact && (
        <span className="brand-copy">
          <strong>AIKYARA</strong>
          <small>Many ideas. One future.</small>
        </span>
      )}
    </Link>
  );
}
