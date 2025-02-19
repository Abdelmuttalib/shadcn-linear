import { IconProps } from "@radix-ui/react-icons/dist/types";

export function BacklogIcon({ ...props }: IconProps) {
  return (
    <svg
      className=""
      width="16"
      height="16"
      viewBox="0 0 16 16"
      // fill="lch(62.6% 1.35 272 / 1)"
      role="img"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      // style="--icon-color: lch(62.6% 1.35 272 / 1);"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9408 8.91426L12.9576 8.65557C12.9855 8.4419 13 8.22314 13 8C13 7.77686 12.9855 7.5581 12.9576 7.34443L14.9408 7.08573C14.9799 7.38496 15 7.69013 15 8C15 8.30987 14.9799 8.61504 14.9408 8.91426ZM14.4688 5.32049C14.2328 4.7514 13.9239 4.22019 13.5538 3.73851L11.968 4.95716C12.2328 5.30185 12.4533 5.68119 12.6214 6.08659L14.4688 5.32049ZM12.2615 2.4462L11.0428 4.03204C10.6981 3.76716 10.3188 3.54673 9.91341 3.37862L10.6795 1.53116C11.2486 1.76715 11.7798 2.07605 12.2615 2.4462ZM8.91426 1.05917L8.65557 3.04237C8.4419 3.01449 8.22314 3 8 3C7.77686 3 7.5581 3.01449 7.34443 3.04237L7.08574 1.05917C7.38496 1.02013 7.69013 1 8 1C8.30987 1 8.61504 1.02013 8.91426 1.05917ZM5.32049 1.53116L6.08659 3.37862C5.68119 3.54673 5.30185 3.76716 4.95716 4.03204L3.73851 2.4462C4.22019 2.07605 4.7514 1.76715 5.32049 1.53116ZM2.4462 3.73851L4.03204 4.95716C3.76716 5.30185 3.54673 5.68119 3.37862 6.08659L1.53116 5.32049C1.76715 4.7514 2.07605 4.22019 2.4462 3.73851ZM1.05917 7.08574C1.02013 7.38496 1 7.69013 1 8C1 8.30987 1.02013 8.61504 1.05917 8.91426L3.04237 8.65557C3.01449 8.4419 3 8.22314 3 8C3 7.77686 3.01449 7.5581 3.04237 7.34443L1.05917 7.08574ZM1.53116 10.6795L3.37862 9.91341C3.54673 10.3188 3.76716 10.6981 4.03204 11.0428L2.4462 12.2615C2.07605 11.7798 1.76715 11.2486 1.53116 10.6795ZM3.73851 13.5538L4.95716 11.968C5.30185 12.2328 5.68119 12.4533 6.08659 12.6214L5.32049 14.4688C4.7514 14.2328 4.22019 13.9239 3.73851 13.5538ZM7.08574 14.9408L7.34443 12.9576C7.5581 12.9855 7.77686 13 8 13C8.22314 13 8.4419 12.9855 8.65557 12.9576L8.91427 14.9408C8.61504 14.9799 8.30987 15 8 15C7.69013 15 7.38496 14.9799 7.08574 14.9408ZM10.6795 14.4688L9.91341 12.6214C10.3188 12.4533 10.6981 12.2328 11.0428 11.968L12.2615 13.5538C11.7798 13.9239 11.2486 14.2328 10.6795 14.4688ZM13.5538 12.2615L11.968 11.0428C12.2328 10.6981 12.4533 10.3188 12.6214 9.91341L14.4688 10.6795C14.2328 11.2486 13.924 11.7798 13.5538 12.2615Z"
      ></path>
    </svg>
  );
}

export function ActiveIcon({ ...props }: IconProps) {
  return (
    <svg
      className=""
      width="16"
      height="16"
      viewBox="0 0 16 16"
      // fill="lch(62.6% 1.35 272 / 1)"
      role="img"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      // style="--icon-color: lch(62.6% 1.35 272 / 1);"
      fill="currentColor"
      {...props}
    >
      <path d="M4.25 1A3.25 3.25 0 0 0 1 4.25v4.5A3.25 3.25 0 0 0 4.25 12h4.5A3.25 3.25 0 0 0 12 8.75v-4.5A3.25 3.25 0 0 0 8.75 1h-4.5ZM2.5 4.25c0-.966.784-1.75 1.75-1.75h4.5c.966 0 1.75.784 1.75 1.75v4.5a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 2.5 8.75v-4.5Z"></path>
      <path d="M5.043 14.136C4.556 13.685 4.98 13 5.645 13c.244 0 .472.105.678.235.269.168.587.265.927.265h4.5c.477 0 .91-.19 1.225-.5H13v-.025c.31-.316.5-.748.5-1.225v-4.5c0-.34-.097-.658-.265-.927-.13-.206-.235-.434-.235-.678 0-.664.684-1.09 1.136-.602.536.58.864 1.355.864 2.207v4.5A3.25 3.25 0 0 1 11.75 15h-4.5a3.238 3.238 0 0 1-2.207-.864Z"></path>
    </svg>
  );
}

export function AllTasksIcon({ ...props }: IconProps) {
  return (
    <svg
      className=""
      width="16"
      height="16"
      viewBox="0 0 16 16"
      // fill="lch(62.6% 1.35 272 / 1)"
      role="img"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      // style="--icon-color: lch(62.6% 1.35 272 / 1);"
      fill="currentColor"
      {...props}
    >
      <path d="M5.29969 2.5C4.96902 2.5 4.67088 2.5 4.40039 2.50249C4.68982 2.00006 5.11934 1.59122 5.63793 1.32698C6.27967 1 7.11975 1 8.79991 1H10.1999C11.8801 1 12.7201 1 13.3619 1.32698C13.9264 1.6146 14.3853 2.07354 14.6729 2.63803C14.9999 3.27976 14.9999 4.11984 14.9999 5.8V7.2C14.9999 8.88016 14.9999 9.72024 14.6729 10.362C14.4086 10.8806 13.9997 11.3102 13.4972 11.5996C13.4997 11.3291 13.4997 11.0308 13.4997 10.7V8.9C13.4997 6.65979 13.4997 5.53969 13.0637 4.68404C12.6802 3.93139 12.0683 3.31947 11.3157 2.93597C10.46 2.5 9.3399 2.5 7.09969 2.5H5.29969Z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 8.8C1 7.11984 1 6.27976 1.32698 5.63803C1.6146 5.07354 2.07354 4.6146 2.63803 4.32698C3.27976 4 4.11984 4 5.8 4H7.2C8.88016 4 9.72024 4 10.362 4.32698C10.9265 4.6146 11.3854 5.07354 11.673 5.63803C12 6.27976 12 7.11984 12 8.8V10.2C12 11.8802 12 12.7202 11.673 13.362C11.3854 13.9265 10.9265 14.3854 10.362 14.673C9.72024 15 8.88016 15 7.2 15H5.8C4.11984 15 3.27976 15 2.63803 14.673C2.07354 14.3854 1.6146 13.9265 1.32698 13.362C1 12.7202 1 11.8802 1 10.2V8.8ZM4 7.5C4 7.22386 4.22386 7 4.5 7H8.5C8.77614 7 9 7.22386 9 7.5C9 7.77614 8.77614 8 8.5 8H4.5C4.22386 8 4 7.77614 4 7.5ZM4.5 9C4.22386 9 4 9.22386 4 9.5C4 9.77614 4.22386 10 4.5 10H8.5C8.77614 10 9 9.77614 9 9.5C9 9.22386 8.77614 9 8.5 9H4.5ZM4 11.5C4 11.2239 4.22386 11 4.5 11H8.5C8.77614 11 9 11.2239 9 11.5C9 11.7761 8.77614 12 8.5 12H4.5C4.22386 12 4 11.7761 4 11.5Z"
      ></path>
    </svg>
  );
}

export function NotificationBellIcon({ ...props }: IconProps) {
  return (
    <svg
      className=""
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      // fill="lch(62.6% 1.35 272 / 1)"
      role="img"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      // style="--icon-color: lch(62.6% 1.35 272 / 1);"
      fill="currentColor"
      {...props}
    >
      <path d="M6 13h4a2 2 0 0 1-3.995.15L6 13h4-4ZM8 1a4 4 0 0 1 4 4v3.03l1.684 1.578a1 1 0 0 1 .316.73V11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-.662a1 1 0 0 1 .316-.73L4 8.03V5a4 4 0 0 1 4-4Z"></path>
    </svg>
  );
}

export function NewViewIcon({ ...props }: IconProps) {
  return (
    <svg
      className=""
      width="16"
      height="16"
      viewBox="0 0 16 16"
      // fill="lch(62.6% 1.35 272 / 1)"
      role="img"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      // style="--icon-color: lch(62.6% 1.35 272 / 1);"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.97358 1.34476C7.57022 0.885624 8.41055 0.885024 9.00788 1.3433L14.5499 5.59521C15.15 6.05565 15.15 6.94435 14.5499 7.40478L9.00788 11.6567C8.41055 12.115 7.57022 12.1144 6.97358 11.6552L1.44875 7.40374C0.850417 6.94331 0.850415 6.05669 1.44875 5.59625L6.97358 1.34476ZM8 3.25C8.41421 3.25 8.75 3.58579 8.75 4V5.75H10.5C10.9142 5.75 11.25 6.08579 11.25 6.5C11.25 6.91421 10.9142 7.25 10.5 7.25H8.75V9C8.75 9.41421 8.41421 9.75 8 9.75C7.58579 9.75 7.25 9.41421 7.25 9V7.25H5.5C5.08579 7.25 4.75 6.91421 4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75H7.25V4C7.25 3.58579 7.58579 3.25 8 3.25Z"
      ></path>
      <path d="M1.15024 9.79849C1.39408 9.46375 1.84872 9.40113 2.16572 9.65862L6.50981 12.9949C7.29068 13.6292 8.37801 13.6292 9.15888 12.9949L13.8344 9.65862C14.1513 9.40113 14.606 9.46375 14.8498 9.79849C15.0937 10.1332 15.0344 10.6133 14.7174 10.8708L10.0419 14.2071C8.74045 15.2643 6.92824 15.2643 5.62678 14.2071L1.28269 10.8708C0.965698 10.6133 0.906397 10.1332 1.15024 9.79849Z"></path>
    </svg>
  );
}
export function FilterIcon({ ...props }: IconProps) {
  return (
    <svg
      className=""
      width="16"
      height="16"
      viewBox="0 0 16 16"
      // fill="lch(62.6% 1.35 272 / 1)"
      role="img"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      // style="--icon-color: lch(62.6% 1.35 272 / 1);"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.25 3a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h12.5ZM4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8Zm2.75 3.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
      ></path>
    </svg>
  );
}

export function DisplayIcon({ ...props }: IconProps) {
  return (
    <svg
      className=""
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      // fill="lch(62.6% 1.35 272 / 1)"
      role="img"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      // style="--icon-color: lch(62.6% 1.35 272 / 1);"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 10.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 8 14v-3a.5.5 0 0 1 .5-.5h1Zm-2.5 1V13H1.75a.75.75 0 0 1 0-1.5H7Zm7.25 0a.75.75 0 0 1 0 1.5H11v-1.5h3.25ZM5.5 6a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1ZM3 7.25v1.5H1.75a.75.75 0 0 1 0-1.5H3Zm11.25 0a.75.75 0 0 1 0 1.5H7v-1.5h7.25Zm-2.75-5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1ZM9 3v1.5H1.75a.75.75 0 0 1 0-1.5H9Zm5.25 0a.75.75 0 0 1 0 1.5H13V3h1.25Z"
      ></path>
    </svg>
  );
}

export function TodoIcon({ ...props }: IconProps) {
  return (
    <svg
      className=""
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      {...props}
    >
      <circle
        cx="7"
        cy="7"
        r="6"
        fill="none"
        stroke="#e2e2e2"
        strokeWidth="2"
        strokeDasharray="3.14 0"
        strokeDashoffset="-0.7"
      ></circle>
      <circle
        className="progress"
        cx="7"
        cy="7"
        r="2"
        fill="none"
        stroke="#e2e2e2"
        strokeWidth="4"
        strokeDasharray="0 100"
        strokeDashoffset="0"
        transform="rotate(-90 7 7)"
      ></circle>
    </svg>
  );
}

export function InProgressIcon({ ...props }: IconProps) {
  return (
    <svg
      className=""
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      {...props}
    >
      <circle
        cx="7"
        cy="7"
        r="6"
        fill="none"
        stroke="lch(80% 90 85)"
        strokeWidth="2"
        strokeDasharray="3.14 0"
        strokeDashoffset="-0.7"
      ></circle>
      <circle
        className="progress"
        cx="7"
        cy="7"
        r="2"
        fill="none"
        stroke="lch(80% 90 85)"
        strokeWidth="4"
        strokeDasharray="6.2517693806436885 100"
        strokeDashoffset="0"
        transform="rotate(-90 7 7)"
      ></circle>
    </svg>
  );
}

export function DoneIcon({ ...props }: IconProps) {
  return (
    <svg
      className=""
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="#fff"
      {...props}
    >
      <circle
        cx="7"
        cy="7"
        r="6"
        fill=""
        stroke="lch(48% 59.31 288.43)"
        strokeWidth="2"
        strokeDasharray="3.14 0"
        strokeDashoffset="-0.7"
      ></circle>
      <circle
        className="progress"
        cx="7"
        cy="7"
        r="3"
        fill=""
        stroke="lch(48% 59.31 288.43)"
        strokeWidth="6"
        strokeDasharray="18.84955592153876 100"
        strokeDashoffset="0"
        transform="rotate(-90 7 7)"
      ></circle>
      <path
        className="icon"
        stroke="none"
        d="M10.951 4.24896C11.283 4.58091 11.283 5.11909 10.951 5.45104L5.95104 10.451C5.61909 10.783 5.0809 10.783 4.74896 10.451L2.74896 8.45104C2.41701 8.11909 2.41701 7.5809 2.74896 7.24896C3.0809 6.91701 3.61909 6.91701 3.95104 7.24896L5.35 8.64792L9.74896 4.24896C10.0809 3.91701 10.6191 3.91701 10.951 4.24896Z"
      ></path>
    </svg>
  );
}

export function EllipsisIcon({ ...props }: IconProps) {
  return (
    <svg
      className=""
      width="16"
      height="16"
      viewBox="0 0 16 16"
      // fill="lch(62.6% 1.35 272 / 1)"
      role="img"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      // style="--icon-color: lch(62.6% 1.35 272 / 1);"
      fill="currentColor"
      {...props}
    >
      <path d="M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path>
    </svg>
  );
}

export function PlusIcon({ ...props }: IconProps) {
  return (
    <svg
      className=""
      width="16"
      height="16"
      viewBox="0 0 16 16"
      // fill="lch(62.6% 1.35 272 / 1)"
      role="img"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      // style="--icon-color: lch(62.6% 1.35 272 / 1);"
      fill="currentColor"
      {...props}
    >
      <path d="M8.75 4C8.75 3.58579 8.41421 3.25 8 3.25C7.58579 3.25 7.25 3.58579 7.25 4V7.25H4C3.58579 7.25 3.25 7.58579 3.25 8C3.25 8.41421 3.58579 8.75 4 8.75H7.25V12C7.25 12.4142 7.58579 12.75 8 12.75C8.41421 12.75 8.75 12.4142 8.75 12V8.75H12C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25H8.75V4Z"></path>
    </svg>
  );
}

export function HighPriorityIcon({ ...props }: IconProps) {
  return (
    <svg
      className=""
      aria-label="High Priority"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      // fill="lch(64.892% 1.933 272 / 1)"
      role="img"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      // style="--icon-color: lch(64.892% 1.933 272 / 1);"
      {...props}
    >
      <rect x="1.5" y="8" width="3" height="6" rx="1"></rect>
      <rect x="6.5" y="5" width="3" height="9" rx="1"></rect>
      <rect x="11.5" y="2" width="3" height="12" rx="1"></rect>
    </svg>
  );
}

export function MediumPriorityIcon({ ...props }: IconProps) {
  return (
    <svg
      className=""
      aria-label="Medium Priority"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      // fill="lch(64.892% 1.933 272 / 1)"
      role="img"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      // style="--icon-color: lch(64.892% 1.933 272 / 1);"
      {...props}
    >
      <rect x="1.5" y="8" width="3" height="6" rx="1"></rect>
      <rect x="6.5" y="5" width="3" height="9" rx="1"></rect>
      <rect
        x="11.5"
        y="2"
        width="3"
        height="12"
        rx="1"
        fillOpacity="0.4"
      ></rect>
    </svg>
  );
}

export function LowPriorityIcon({ ...props }: IconProps) {
  return (
    <svg
      className=""
      aria-label="High Priority"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      // fill="lch(64.892% 1.933 272 / 1)"
      role="img"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      // style="--icon-color: lch(64.892% 1.933 272 / 1);"
      {...props}
    >
      <rect x="1.5" y="8" width="3" height="6" rx="1"></rect>
      <rect x="6.5" y="5" width="3" height="9" rx="1"></rect>
      <rect x="11.5" y="2" width="3" height="12" rx="1"></rect>

      <svg
        aria-label="Low Priority"
        className=""
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        // fill="lch(64.892% 1.933 272 / 1)"
        role="img"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        // style="--icon-color: lch(64.892% 1.933 272 / 1);"
      >
        <rect x="1.5" y="8" width="3" height="6" rx="1"></rect>
        <rect
          x="6.5"
          y="5"
          width="3"
          height="9"
          rx="1"
          fillOpacity="0.4"
        ></rect>
        <rect
          x="11.5"
          y="2"
          width="3"
          height="12"
          rx="1"
          fillOpacity="0.4"
        ></rect>
      </svg>
    </svg>
  );
}

export function UrgentPriorityIcon({ ...props }: IconProps) {
  return (
    <svg
      className="text-red-500"
      aria-label="Urgent Priority"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="lch(66% 80 48)"
      {...props}
    >
      <path d="M3 1C1.91067 1 1 1.91067 1 3V13C1 14.0893 1.91067 15 3 15H13C14.0893 15 15 14.0893 15 13V3C15 1.91067 14.0893 1 13 1H3ZM7 4L9 4L8.75391 8.99836H7.25L7 4ZM9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z" />
    </svg>
  );
}

export function UserPlaceholderIcon({ ...props }: IconProps) {
  return (
    <svg
      className=""
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      // fill="lch(63.975% 1.933 272 / 1)"
      role="img"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      // style="--icon-color: lch(63.975% 1.933 272 / 1);"
      aria-hidden="true"
      {...props}
    >
      <path d="M14.988 8.647a.473.473 0 0 1-.543.433l-.496-.065a.537.537 0 0 1-.453-.563 5.646 5.646 0 0 0 0-.444.537.537 0 0 1 .453-.563l.496-.065a.473.473 0 0 1 .543.433 7.1 7.1 0 0 1 0 .834Zm-.727-3.551a.473.473 0 0 1-.254.646l-.462.192a.538.538 0 0 1-.674-.261 5.5 5.5 0 0 0-.22-.38.538.538 0 0 1 .11-.715l.396-.305a.473.473 0 0 1 .687.102c.153.231.292.472.417.72Zm-2.406-2.71c.23.152.27.468.102.687l-.305.396a.538.538 0 0 1-.714.11 5.49 5.49 0 0 0-.38-.22.538.538 0 0 1-.261-.674l.191-.462a.473.473 0 0 1 .646-.254c.25.125.49.264.72.417ZM8.416 1.242a.473.473 0 0 1 .433.543l-.065.496a.537.537 0 0 1-.563.453 5.627 5.627 0 0 0-.444 0 .537.537 0 0 1-.563-.453l-.065-.496a.473.473 0 0 1 .433-.543 7.109 7.109 0 0 1 .834 0Zm-3.551.727a.473.473 0 0 1 .646.254l.192.462a.538.538 0 0 1-.261.674c-.13.069-.257.142-.38.22a.537.537 0 0 1-.715-.11l-.305-.396a.473.473 0 0 1 .102-.687c.231-.153.472-.292.72-.417Zm-2.71 2.406a.473.473 0 0 1 .687-.102l.396.305a.537.537 0 0 1 .11.714c-.078.124-.151.25-.22.38a.538.538 0 0 1-.674.262l-.462-.192a.473.473 0 0 1-.254-.646c.125-.25.264-.49.417-.72ZM1.555 7.38a.473.473 0 0 0-.543.433 7.109 7.109 0 0 0 0 .834.473.473 0 0 0 .543.433l.496-.065a.537.537 0 0 0 .453-.563 5.627 5.627 0 0 1 0-.444.537.537 0 0 0-.453-.563l-.496-.065Zm.184 3.984a.473.473 0 0 1 .254-.646l.462-.192a.538.538 0 0 1 .674.261c.069.13.142.257.22.38a.537.537 0 0 1-.11.715l-.396.305a.473.473 0 0 1-.687-.102 6.989 6.989 0 0 1-.417-.72Zm11.418.823a.473.473 0 0 0 .687-.102c.153-.231.292-.472.417-.72a.473.473 0 0 0-.254-.647l-.462-.192a.538.538 0 0 0-.674.261c-.069.13-.142.257-.22.38a.537.537 0 0 0 .11.715l.396.305ZM8 4.23a2 2 0 0 0-2 2v.5a2 2 0 0 0 4 0v-.5a2 2 0 0 0-2-2ZM5.121 11.109a3 3 0 0 1 2.122-.879h1.514a3 3 0 0 1 2.122.879l1.01 1.01c.586.586.592 1.552-.104 2A6.967 6.967 0 0 1 8 15.23a6.967 6.967 0 0 1-3.784-1.11c-.697-.449-.69-1.415-.105-2l1.01-1.011Z"></path>
    </svg>
  );
}
