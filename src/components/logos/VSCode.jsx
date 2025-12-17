export default function VSCode(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      aria-label="Visual Studio Code"
      {...props}
    >
      {/* back ribbon */}
      <path
        fill="#007ACC"
        d="M117.3 15.4L90.2 2.3c-2.7-1.3-5.9-.8-8.1 1.2L39.3 42.6 15.7 24.8c-2.3-1.7-5.4-1.5-7.5.6L2.4 31c-1.9 2-1.8 5.1.2 7.1l21.5 20.6L2.6 79.4c-2.1 2-.4 5.5 2.6 5.5.9 0 1.9-.3 2.7-.9l23.9-17.5 42.7 38.7c2.2 2 5.4 2.4 8.1 1.1l27.1-13.1c2.4-1.2 3.9-3.6 3.9-6.2V21.6c0-2.6-1.5-5-3.9-6.2z"
      />

      {/* front ribbon cut */}
      <path
        fill="#1F9CF0"
        d="M90.2 124.4c-2.7 1.3-5.9.9-8.1-1.1L31.8 66.5l-7.7 7.1 42.2 38.8c2.2 2 5.4 2.4 8.1 1.1l27.1-13.1z"
      />
    </svg>
  );
}
