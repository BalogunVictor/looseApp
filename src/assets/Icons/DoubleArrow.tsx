import { memo } from 'react';

function DoubleArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M7.03384 11.6863L6.99893 13.686L0 13.5638L0.122166 6.56489L2.12186 6.5998L2.05928 10.185L9.95379 2.56135L6.42142 2.4997L6.45632 0.5L13.4553 0.622166L13.3331 7.6211L11.3334 7.5862L11.3969 3.94809L3.44855 11.6237L7.03384 11.6863Z"
        fill="#8E8E93"
      />
    </svg>
  );
}

const DoubleArrowIcon = memo(DoubleArrow);
export default DoubleArrowIcon;
