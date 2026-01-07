import React from "react";
import Svg, { Circle, ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const OutlinedScheduleIcon = () => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <G clip-path="url(#clip0_1035_17746)">
        <Path
          d="M2.75 6C2.75 4.75736 3.75736 3.75 5 3.75H20C21.2426 3.75 22.25 4.75736 22.25 6V19.5C22.25 20.7426 21.2426 21.75 20 21.75H5C3.75736 21.75 2.75 20.7426 2.75 19.5V6Z"
          stroke="#2E8B57"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <Circle cx="14.375" cy="10.875" r="1.125" fill="#2E8B57" />
        <Circle cx="18.125" cy="10.875" r="1.125" fill="#2E8B57" />
        <Circle cx="14.375" cy="14.625" r="1.125" fill="#2E8B57" />
        <Circle cx="18.125" cy="14.625" r="1.125" fill="#2E8B57" />
        <Circle cx="6.875" cy="14.625" r="1.125" fill="#2E8B57" />
        <Circle cx="10.625" cy="14.625" r="1.125" fill="#2E8B57" />
        <Circle cx="6.875" cy="18.375" r="1.125" fill="#2E8B57" />
        <Circle cx="10.625" cy="18.375" r="1.125" fill="#2E8B57" />
        <Circle cx="14.375" cy="18.375" r="1.125" fill="#2E8B57" />
        <Path
          d="M6.5 2.25V3.75M18.5 2.25V3.75"
          stroke="#2E8B57"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M22.25 7.5H2.75"
          stroke="#2E8B57"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1035_17746">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default OutlinedScheduleIcon;
