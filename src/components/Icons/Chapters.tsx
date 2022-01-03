import * as React from "react";

function Chapters(props: React.SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 19L19 18V5C19 3.9 18.1 3 17 3H7C7 1.9 7.89 1 8.99 1H19C20.1 1 21 1.9 21 3V19ZM5 5H15C16.1 5 17 5.9 17 7V23L10 20L3 23V7C3 5.9 3.9 5 5 5Z"
        fill="inherit"
      />
    </svg>
  );
}

export default Chapters;