import * as React from "react";

import { SVGProps } from "./SVG.props";

const SvgArrowLeft: React.FC<SVGProps> = ({
  height = "24",
  width = "24",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M5 12l6-6m-6 6 6 6"
    />
  </svg>
);
export default SvgArrowLeft;
