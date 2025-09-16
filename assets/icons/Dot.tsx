import React from "react";
import Svg, { Path } from "react-native-svg";

const Dot = () => {
  return (
    <Svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <Path
        d="M4 0C1.79086 0 0 1.79086 0 4V4.006C0 6.21514 1.78486 8 3.994 8H4C6.20914 8 8 6.21514 8 4.006V4C8 1.79086 6.21514 0 4.006 0H4Z"
        fill="#2E8B57"
      />
    </Svg>
  );
};

export default Dot;
