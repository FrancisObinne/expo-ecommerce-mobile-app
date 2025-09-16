import React from "react";
import Svg, { Path } from "react-native-svg";

const ClockIcon = ({ color = "#64748B" }) => {
  return (
    <Svg width="23" height="20" viewBox="0 0 23 20" fill="none">
      <Path
        d="M10.9688 2.5C6.82812 2.5 3.46875 5.85938 3.46875 10C3.46875 14.1406 6.82812 17.5 10.9688 17.5C15.1094 17.5 18.4688 14.1406 18.4688 10C18.4688 5.85938 15.1094 2.5 10.9688 2.5Z"
        stroke={color}
        strokeWidth="1.25"
      />
      <Path
        d="M10.9688 5V10.625H14.7188"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ClockIcon;
