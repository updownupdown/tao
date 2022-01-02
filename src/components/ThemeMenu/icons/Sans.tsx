import * as React from "react";

function Sans(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.49988 2H21.7841V5.59767H14.3714V22H10.9126V5.59767H3.50001L3.49988 2Z"
        fill="inherit"
      />
    </svg>
  );
}

export default Sans;
