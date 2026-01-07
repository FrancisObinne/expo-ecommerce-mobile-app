import React from "react";
import Svg, { Circle, ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const CalendarIcon = () => {
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
      <G clip-path="url(#clip0_1035_18534)">
        <Path
          d="M2.25 6.5C2.25 5.25736 3.25736 4.25 4.5 4.25H19.5C20.7426 4.25 21.75 5.25736 21.75 6.5V20C21.75 21.2426 20.7426 22.25 19.5 22.25H4.5C3.25736 22.25 2.25 21.2426 2.25 20V6.5Z"
          stroke="#4B5563"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <Circle cx="13.875" cy="11.375" r="1.125" fill="#4B5563" />
        <Circle cx="17.625" cy="11.375" r="1.125" fill="#4B5563" />
        <Circle cx="13.875" cy="15.125" r="1.125" fill="#4B5563" />
        <Circle cx="17.625" cy="15.125" r="1.125" fill="#4B5563" />
        <Circle cx="6.375" cy="15.125" r="1.125" fill="#4B5563" />
        <Circle cx="10.125" cy="15.125" r="1.125" fill="#4B5563" />
        <Circle cx="6.375" cy="18.875" r="1.125" fill="#4B5563" />
        <Circle cx="10.125" cy="18.875" r="1.125" fill="#4B5563" />
        <Circle cx="13.875" cy="18.875" r="1.125" fill="#4B5563" />
        <Path
          d="M6 2.75V4.25M18 2.75V4.25"
          stroke="#4B5563"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M21.75 8H2.25"
          stroke="#4B5563"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1035_18534">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CalendarIcon;
