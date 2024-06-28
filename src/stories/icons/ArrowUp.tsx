import * as React from "react";

import { SVGProps } from "./SVG.props";

const SvgArrowUp: React.FC<SVGProps> = ({
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
      d="M12 5v14m0-14-6 6m6-6 6 6"
    />
  </svg>
);
export default SvgArrowUp;
