export const Icon = ({ type }: { type: string }) => {
  if (type === "arrow") {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
            fill="#000000"
          ></path>
        </g>
      </svg>
    );
  }

  return null;
};
