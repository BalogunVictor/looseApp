import { memo } from 'react';

function Previous() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M1.91076 10.5892C1.58533 10.2638 1.58533 9.73616 1.91076 9.41072L5.2441 6.07739C5.56954 5.75195 6.09717 5.75195 6.42261 6.07739C6.74805 6.40283 6.74805 6.93047 6.42261 7.2559L4.51186 9.16665L17.5 9.16665C17.9603 9.16665 18.3334 9.53974 18.3334 9.99998C18.3334 10.4602 17.9603 10.8333 17.5 10.8333L4.51186 10.8333L6.42261 12.7441C6.74805 13.0695 6.74805 13.5971 6.42261 13.9226C6.09717 14.248 5.56954 14.248 5.2441 13.9226L1.91076 10.5892Z"
        fill="#344054"
      />
    </svg>
  );
}

const PreviousIcon = memo(Previous);
export default PreviousIcon;
