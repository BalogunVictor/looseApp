import { memo } from 'react';

function Check() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <circle cx="10" cy="10" r="10" fill="#5FCE8D" />
    </svg>
  );
}

const CheckIcon = memo(Check);
export default CheckIcon;
