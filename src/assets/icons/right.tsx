interface ButtonProps {
  color: string;
}

export function RightIcon({color}:ButtonProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="24"
      fill="none"
      viewBox="0 0 10 24"
    >
      <path
        fill={color === "" ? "#383838" : color}
        d="M4.758 1.483A2.683 2.683 0 017.158 0c1.995 0 3.292 2.1 2.4 3.883L6.842 9.317a6 6 0 000 5.366l2.716 5.434C10.45 21.9 9.153 24 7.158 24a2.683 2.683 0 01-2.4-1.483L.842 14.683a6 6 0 010-5.366l3.916-7.834z"
      ></path>
    </svg>
  );
};