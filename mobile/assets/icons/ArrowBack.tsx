import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const ArrowBack = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_808_1078)">
        <Path
          d="M15.375 5.25L8.625 12L15.375 18.75"
          stroke="black"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_808_1078">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ArrowBack;
