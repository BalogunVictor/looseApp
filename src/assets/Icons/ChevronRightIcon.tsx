import { memo } from 'react';

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M13.4026 11.1423C14.0066 10.5005 14.0066 9.49947 13.4026 8.85772L7.27348 2.34553C6.95805 2.01038 6.43066 1.9944 6.09551 2.30983C5.76037 2.62526 5.74438 3.15266 6.05982 3.4878L12.1889 10L6.05982 16.5122C5.74439 16.8473 5.76037 17.3747 6.09551 17.6902C6.43066 18.0056 6.95805 17.9896 7.27348 17.6545L13.4026 11.1423Z"
        fill="#6935D3"
      />
    </svg>
  );
}

const ChevronRightIcon = memo(ChevronRight);
export default ChevronRightIcon;
