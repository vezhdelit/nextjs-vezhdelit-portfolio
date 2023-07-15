import { LucideProps } from "lucide-react";

const Icons = {
  logo: (props: LucideProps) => (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0ZM44.231 40.9853L47.7665 16.2366L23.0178 19.7721L28.9454 25.6998C29.8685 25.2515 30.9048 25 31.9999 25C35.8659 25 38.9999 28.134 38.9999 32C38.9999 33.0951 38.7484 34.1315 38.3001 35.0545L44.231 40.9853ZM40.9853 44.2311L35.0544 38.3002C34.1314 38.7485 33.095 39 31.9999 39C28.1339 39 24.9999 35.866 24.9999 32C24.9999 30.9049 25.2514 29.8685 25.6997 28.9455L19.7721 23.0179L16.2366 47.7666L40.9853 44.2311Z"
        fill="fill-inherit"
      />
      <path d="M10 10L54 54" stroke="inherit" strokeWidth="5.5" />
    </svg>
  ),
  sun: (props: LucideProps) => (
    <svg
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" x2="12" y1="1" y2="3" />
      <line x1="12" x2="12" y1="21" y2="23" />
      <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
      <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
      <line x1="1" x2="3" y1="12" y2="12" />
      <line x1="21" x2="23" y1="12" y2="12" />
      <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
      <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
    </svg>
  ),
  moon: (props: LucideProps) => (
    <svg
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),

  burger: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  ),

  close: (props: LucideProps) => (
    <svg
      height="24px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width="24px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
    </svg>
  ),

  download: (props: LucideProps) => (
    <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title />
      <g>
        <path d="M90,54a5.9966,5.9966,0,0,0-6,6V78H12V60A6,6,0,0,0,0,60V84a5.9966,5.9966,0,0,0,6,6H90a5.9966,5.9966,0,0,0,6-6V60A5.9966,5.9966,0,0,0,90,54Z" />
        <path d="M43.7578,64.2422a5.9979,5.9979,0,0,0,8.4844,0l18-18a5.9994,5.9994,0,0,0-8.4844-8.4844L54,45.5156V12a6,6,0,0,0-12,0V45.5156l-7.7578-7.7578a5.9994,5.9994,0,0,0-8.4844,8.4844Z" />
      </g>
    </svg>
  ),

  message: (props: LucideProps) => (
    <svg
      fill="none"
      height="24"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 12L17 12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 8L13 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 20.2895V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H7.96125C7.35368 17 6.77906 17.2762 6.39951 17.7506L4.06852 20.6643C3.71421 21.1072 3 20.8567 3 20.2895Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),

  github: (props: LucideProps) => (
    <svg
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill="#3E75C3"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_44_140)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M127.992 2.66602C57.312 2.66602 0 60.198 0 131.182C0 187.95 36.672 236.116 87.544 253.112C93.944 254.292 96.28 250.324 96.28 246.92C96.28 243.868 96.168 235.788 96.104 225.066C60.496 232.832 52.984 207.838 52.984 207.838C47.168 192.996 38.776 189.044 38.776 189.044C27.152 181.068 39.656 181.23 39.656 181.23C52.496 182.138 59.256 194.474 59.256 194.474C70.68 214.112 89.216 208.442 96.512 205.148C97.672 196.844 100.984 191.18 104.64 187.968C76.216 184.724 46.336 173.704 46.336 124.462C46.336 110.43 51.32 98.962 59.512 89.974C58.192 86.722 53.8 73.662 60.76 55.968C60.76 55.968 71.512 52.514 95.96 69.14C106.176 66.288 117.12 64.868 128.008 64.81C138.88 64.866 149.832 66.288 160.056 69.14C184.488 52.514 195.216 55.968 195.216 55.968C202.2 73.662 197.808 86.722 196.488 89.974C204.696 98.962 209.648 110.43 209.648 124.462C209.648 173.824 179.72 184.692 151.208 187.872C155.8 191.84 159.896 199.678 159.896 211.67C159.896 228.85 159.736 242.704 159.736 246.922C159.736 250.36 162.04 254.36 168.536 253.098C219.36 236.068 256 187.934 256 131.182C256 60.198 198.688 2.66602 127.992 2.66602Z"
          fill="fill-inherit"
        />
      </g>
      <defs>
        <clipPath id="clip0_44_140">
          <rect width="256" height="256" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  redirect: (props: LucideProps) => (
    <svg
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15,10 L15,14 C15,15.1045695 14.1045695,16 13,16 L2,16 C0.8954305,16 0,15.1045695 0,14 L0,3 C0,1.8954305 0.8954305,1 2,1 L6,1 L6,3 L2,3 L2,14 L13,14 L13,10 L15,10 Z M13.9971001,3.41421356 L7.70420685,9.70710678 L6.28999329,8.29289322 L12.5828865,2 L8.99710007,2 L8.99710007,0 L15.9971001,0 L15.9971001,7 L13.9971001,7 L13.9971001,3.41421356 Z"
        fill-rule="evenodd"
      />
    </svg>
  ),
};

export default Icons;
