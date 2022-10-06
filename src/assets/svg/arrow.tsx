import React from "react";

function Arrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 28 28"
    >
      <rect width="28" height="28" fill="#633BBC" rx="5"></rect>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M7 14a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.498.498 0 010 .708l-4 4a.5.5 0 01-.708-.708l3.147-3.146H7.5A.5.5 0 017 14z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Arrow;