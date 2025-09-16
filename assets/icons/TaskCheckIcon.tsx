import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const TaskCheckIcon = () => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <G clip-path="url(#clip0_1035_22906)">
        <Path
          d="M13 4L6 12L3 9"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1035_22906">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default TaskCheckIcon;
