import * as React from "react";

function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15 6.70508C14.8132 6.51783 14.5595 6.4126 14.295 6.4126C14.0305 6.4126 13.7769 6.51783 13.59 6.70508L9.00002 11.2951C8.61002 11.6851 8.61002 12.3151 9.00002 12.7051L13.59 17.2951C13.98 17.6851 14.61 17.6851 15 17.2951C15.39 16.9051 15.39 16.2751 15 15.8851L11.12 11.9951L15 8.11508C15.39 7.72508 15.38 7.08508 15 6.70508Z"
        fill="inherit"
      />
    </svg>
  );
}

export default ArrowLeft;
