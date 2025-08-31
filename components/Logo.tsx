export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <circle cx="32" cy="32" r="30" fill="#E7B045" stroke="#6B4F3A" strokeWidth="2" />
      <path
        d="M18 36c4-6 12-6 16 0 4-6 12-6 16 0-2 8-10 12-16 12s-14-4-16-12Z"
        fill="#FFF3E0"
        stroke="#6B4F3A"
        strokeWidth="2"
      />
      <circle cx="26" cy="30" r="2" fill="#6B4F3A" />
      <circle cx="38" cy="30" r="2" fill="#6B4F3A" />
    </svg>
  );
}
