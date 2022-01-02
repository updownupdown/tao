import * as React from "react";

function ArrowDown(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15.875 9.00001L11.995 12.88L8.11498 9.00001C7.92814 8.81275 7.67449 8.70752 7.40998 8.70752C7.14546 8.70752 6.89181 8.81275 6.70498 9.00001C6.31498 9.39001 6.31498 10.02 6.70498 10.41L11.295 15C11.685 15.39 12.315 15.39 12.705 15L17.295 10.41C17.685 10.02 17.685 9.39001 17.295 9.00001C16.905 8.62001 16.265 8.61001 15.875 9.00001Z"
        fill="inherit"
      />
    </svg>
  );
}

export default ArrowDown;
