import React from "react";

function Banner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1920"
      height="409"
      fill="none"
      viewBox="0 0 1920 409"
    >
      <mask
        id="mask0_10_118"
        style={{ maskType: "alpha" }}
        width="1920"
        height="409"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#181818" d="M0 0H1920V409H0z"></path>
      </mask>
      <g mask="url(#mask0_10_118)">
        <path fill="#181818" d="M0 0H1920V409H0z"></path>
        <g filter="url(#filter0_d_10_118)">
          <circle cy="409" r="146" fill="#8257E6"></circle>
        </g>
        <g filter="url(#filter1_d_10_118)">
          <circle cx="1920" cy="409" r="146" fill="#5CB8E4"></circle>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_10_118"
          width="710"
          height="710"
          x="-355"
          y="58"
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
            radius="93"
            result="effect1_dropShadow_10_118"
          ></feMorphology>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="58"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.509804 0 0 0 0 0.341176 0 0 0 0 0.901961 0 0 0 1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_10_118"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10_118"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter1_d_10_118"
          width="706"
          height="706"
          x="1567"
          y="60"
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
            radius="143"
            result="effect1_dropShadow_10_118"
          ></feMorphology>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="32"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.360784 0 0 0 0 0.721569 0 0 0 0 0.894118 0 0 0 0.98 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_10_118"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10_118"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Banner;