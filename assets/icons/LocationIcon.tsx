import React from "react";
import Svg, { Circle, ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const LocationIcon = () => {
  return (
    <Svg width="18" height="18" viewBox="0 0 16 16" fill="none">
      <G clip-path="url(#clip0_1035_17496)">
        <Path
          d="M8 1.5C5.51562 1.5 3.5 3.41844 3.5 5.78125C3.5 8.5 6.5 12.8084 7.60156 14.2966C7.69997 14.4318 7.83278 14.4994 8 14.4994C8.16722 14.4994 8.30003 14.4318 8.39844 14.2966C9.5 12.8091 12.5 8.50219 12.5 5.78125C12.5 3.41844 10.4844 1.5 8 1.5Z"
          stroke="#64748B"
          strokeLinejoin="round"
        />
        <Circle cx="8" cy="6" r="1.5" stroke="#64748B" strokeLinejoin="round" />
      </G>
      <Defs>
        <ClipPath id="clip0_1035_17496">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default LocationIcon;
