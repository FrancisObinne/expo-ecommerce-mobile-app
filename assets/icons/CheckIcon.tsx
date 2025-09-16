import React from "react";
import Svg, { Path } from "react-native-svg";

const CheckIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.75 6L11.25 18L6.75 13.5M6.75 18L2.25 13.5M17.25 6L10.875 13.3125"
        stroke="#2E8B57"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CheckIcon;
