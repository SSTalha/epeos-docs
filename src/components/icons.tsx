import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export function Arrow({ className, ...props }: Props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M4 12h15M13 5l7 7-7 7" />
    </svg>
  );
}

export function Mark(props: Props) {
  return (
    <svg
      width="28"
      height="30"
      viewBox="0 0 28 30"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M14 1 27 8.5v13L14 29 1 21.5v-13L14 1Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m1 8.5 13 7.4L27 8.5M14 16v13M7.5 5l13 7.5v8L14 24l-6.5-3.5v-8L20.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function FeatureIcon({
  kind,
  ...props
}: Props & { kind: "connect" | "model" | "govern" | "activate" }) {
  const paths = {
    connect: (
      <>
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="15" y="15" width="6" height="6" rx="1" />
        <path d="M6 9v9h9M15 6H9M18 15V6h-3" />
      </>
    ),
    model: (
      <>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
      </>
    ),
    govern: (
      <>
        <path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Z" />
        <path d="m8.5 12 2.5 2.5 4.5-5" />
      </>
    ),
    activate: (
      <>
        <path d="m13 2-9 12h7l-1 8 10-13h-8l1-7Z" />
      </>
    ),
  };
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[kind]}
    </svg>
  );
}
