import * as React from "react";

function ArrowUp(props: React.SVGProps<SVGSVGElement>) {
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
        d="M11.295 9.00002L6.70498 13.59C6.31498 13.98 6.31498 14.61 6.70498 15C7.09498 15.39 7.72498 15.39 8.11498 15L12.005 11.12L15.885 15C16.275 15.39 16.905 15.39 17.295 15C17.685 14.61 17.685 13.98 17.295 13.59L12.705 9.00002C12.325 8.61002 11.685 8.61002 11.295 9.00002Z"
        fill="inherit"
      />
    </svg>
  );
}

export default ArrowUp;
