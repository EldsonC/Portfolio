import React from "react";

function Background() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1920"
      height="1200"
      fill="none"
      viewBox="0 0 1920 1200"
    >
      <mask
        id="mask0_26_11"
        style={{ maskType: "alpha" }}
        width="1920"
        height="1200"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0H1920V1200H0z"></path>
      </mask>
      <g mask="url(#mask0_26_11)">
        <g filter="url(#filter0_d_26_11)">
          <circle cx="1920" cy="357" r="156" fill="#5CB8E4"></circle>
        </g>
        <g filter="url(#filter1_d_26_11)">
          <circle cy="767" r="156" fill="#8257E6"></circle>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_26_11"
          width="706"
          height="706"
          x="1567"
          y="8"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="107"
            result="effect1_dropShadow_26_11"
          ></feMorphology>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="45"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.360784 0 0 0 0 0.721569 0 0 0 0 0.894118 0 0 0 1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_26_11"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_26_11"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter1_d_26_11"
          width="706"
          height="706"
          x="-353"
          y="418"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="107"
            result="effect1_dropShadow_26_11"
          ></feMorphology>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="45"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.509804 0 0 0 0 0.341176 0 0 0 0 0.901961 0 0 0 1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_26_11"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_26_11"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Background;