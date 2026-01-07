import React from "react";
import Svg, { Path } from "react-native-svg";

const RequestTimeOff = () => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Path
        d="M2.75 6C2.75 4.75736 3.75736 3.75 5 3.75H20C21.2426 3.75 22.25 4.75736 22.25 6V19.5C22.25 20.7426 21.2426 21.75 20 21.75H5C3.75736 21.75 2.75 20.7426 2.75 19.5V6Z"
        stroke="#2E8B57"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <Path
        d="M6.5 2.25V3.75M18.5 2.25V3.75M22.25 7.5H2.75"
        stroke="#2E8B57"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default RequestTimeOff;
