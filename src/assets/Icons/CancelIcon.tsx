import { memo } from 'react';

interface CancelProps {
  color?: string;
}

function Cancel({ color = 'white' }: CancelProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={color}
      width="30"
      height="30"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

const CancelBar = memo(Cancel);
export default CancelBar;
