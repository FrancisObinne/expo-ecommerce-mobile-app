import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const CalendarArrowLeft = () => {
  return (
    <Svg width="29" height="29" viewBox="0 0 29 29" fill="none">
      <G clipPath="url(#clip0_2204_1981)">
        <Path
          d="M17.7188 8.875L12.0938 14.5L17.7188 20.125"
          stroke="#4B5563"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2204_1981">
          <Rect
            width="20"
            height="20"
            fill="white"
            transform="translate(4.90625 4.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CalendarArrowLeft;
