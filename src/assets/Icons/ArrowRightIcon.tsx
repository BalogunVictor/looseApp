import { memo } from 'react';

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.96988 3.05517C9.26278 2.76228 9.73766 2.76229 10.0305 3.05519L15.0303 8.05519C15.3232 8.34808 15.3232 8.82295 15.0303 9.11584L10.0304 14.1158C9.73755 14.4087 9.26267 14.4087 8.96978 14.1158C8.67688 13.823 8.67688 13.3481 8.96977 13.0552L12.6894 9.33551H2.5C2.08579 9.33551 1.75 8.99972 1.75 8.58551C1.75 8.1713 2.08579 7.83551 2.5 7.83551H12.6894L8.96986 4.11583C8.67698 3.82293 8.67699 3.34806 8.96988 3.05517Z"
        fill="white"
      />
    </svg>
  );
}

const ArrowRightIcon = memo(ArrowRight);
export default ArrowRightIcon;
