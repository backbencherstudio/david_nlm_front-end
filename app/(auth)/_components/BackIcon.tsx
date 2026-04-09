import React from "react";

const BackIcon = () => {
  return (
    <div className="h-10 w-10 p-2.5 rounded-[0.625rem] bg-grayBg cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M3 8.99976L15 8.99976"
          stroke="#070707"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.74997 12.75C6.74997 12.75 3.00001 9.98817 3 8.99997C2.99999 8.01177 6.75 5.25 6.75 5.25"
          stroke="#070707"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default BackIcon;
