import React from "react";
import Svg, { Path } from "react-native-svg";

const StarIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M22.5 9.75H14.4375L12 2.25L9.5625 9.75H1.5L8.0625 14.25L5.53125 21.75L12 17.0625L18.4688 21.75L15.9375 14.25L22.5 9.75Z"
        stroke="#2E8B57"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default StarIcon;
