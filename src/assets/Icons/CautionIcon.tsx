import { memo } from 'react';

function Caution() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clip-path="url(#clip0_1_19962)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10 3.33333C10.6137 3.33333 11.1111 3.8308 11.1111 4.44444V12.2222C11.1111 12.8359 10.6136 13.3333 10 13.3333C9.38635 13.3333 8.88889 12.8359 8.88889 12.2222L8.88889 4.44444C8.88889 3.8308 9.38635 3.33333 10 3.33333ZM8.61111 15.2778C8.61111 16.0448 9.23294 16.6667 10 16.6667C10.7671 16.6667 11.3889 16.0448 11.3889 15.2778C11.3889 14.5107 10.7671 13.8889 10 13.8889C9.23294 13.8889 8.61111 14.5107 8.61111 15.2778Z"
          fill="#FF9500"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_19962">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

const CautionIcon = memo(Caution);
export default CautionIcon;
