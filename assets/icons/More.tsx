import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function MoreIcon({ color = "#666666", size = 22 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 19 12" fill={color}>
      <Path
        d="M0.875 1.5H17.375M0.875 6H17.375M0.875 10.5H17.375"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
}
