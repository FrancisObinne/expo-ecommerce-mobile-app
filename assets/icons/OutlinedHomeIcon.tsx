import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const OutlinedHomeIcon = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <G clip-path="url(#clip0_1035_18728)">
        <Path
          d="M3.125 8.28125V17.5C3.125 17.6726 3.18602 17.8199 3.30806 17.9419C3.4301 18.064 3.57741 18.125 3.75 18.125H7.5V12.8125C7.5 12.5536 7.59153 12.3326 7.77459 12.1496C7.95765 11.9665 8.17862 11.875 8.4375 11.875H11.5625C11.8214 11.875 12.0424 11.9665 12.2254 12.1496C12.4085 12.3326 12.5 12.5536 12.5 12.8125V18.125H16.25C16.4226 18.125 16.5699 18.064 16.6919 17.9419C16.814 17.8199 16.875 17.6726 16.875 17.5V8.28125"
          stroke="#2E8B57"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M18.75 10L10.4254 2.0313C10.2301 1.82505 9.77344 1.82271 9.57461 2.0313L1.25 10M15.625 6.99224V2.50005H13.75V5.19536"
          stroke="#2E8B57"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1035_18728">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default OutlinedHomeIcon;
