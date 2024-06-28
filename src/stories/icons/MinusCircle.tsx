import * as React from "react";

import { SVGProps } from "./SVG.props";

const SvgMinusCircle: React.FC<SVGProps> = ({
  height = "24",
  width = "24",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16 30C8.268 30 2 23.73 2 16S8.268 2 16 2s14 6.27 14 14-6.268 14-14 14m0-30C7.163 0 0 7.16 0 16s7.163 16 16 16 16-7.16 16-16S24.837 0 16 0m6 15H10a1.001 1.001 0 0 0 0 2h12a1.001 1.001 0 0 0 0-2"
    />
  </svg>
);
export default SvgMinusCircle;
