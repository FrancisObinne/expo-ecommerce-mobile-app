import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const OutlineProfileIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1035_18562)">
        <Path
          d="M16.125 6.75C15.9413 9.22828 14.0625 11.25 12 11.25C9.93754 11.25 8.05551 9.22875 7.87504 6.75C7.68754 4.17188 9.51566 2.25 12 2.25C14.4844 2.25 16.3125 4.21875 16.125 6.75Z"
          stroke="#2E8B57"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <Path
          d="M12.0001 14.25C7.92199 14.25 3.78293 16.5 3.01699 20.7469C2.92465 21.2587 3.21433 21.75 3.75011 21.75H20.2501C20.7864 21.75 21.0761 21.2587 20.9837 20.7469C20.2173 16.5 16.0782 14.25 12.0001 14.25Z"
          stroke="#2E8B57"
          strokeWidth="1.5"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1035_18562">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default OutlineProfileIcon;
