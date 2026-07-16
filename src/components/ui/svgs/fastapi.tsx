import type { SVGProps } from "react";

const FastApi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0L2 14h9l-1 10L22 10h-9L12 0z"
      fill="currentColor"
    />
  </svg>
);

export { FastApi };