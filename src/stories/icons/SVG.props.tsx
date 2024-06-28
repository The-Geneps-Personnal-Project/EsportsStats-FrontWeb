import * as React from "react";

export interface SVGProps extends React.SVGProps<SVGSVGElement> {
  height?: string | number;
  width?: string | number;
}
