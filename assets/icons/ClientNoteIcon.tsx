import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const ClientNoteIcon = () => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <G clipPath="url(#clip0_1035_17422)">
        <Path
          d="M20 10.3711V19.5C20 20.1213 19.7803 20.6516 19.341 21.091C18.9016 21.5303 18.3713 21.75 17.75 21.75H7.25C6.62868 21.75 6.09835 21.5303 5.65901 21.091C5.21967 20.6516 5 20.1213 5 19.5V4.5C5 3.87868 5.21967 3.34835 5.65901 2.90901C6.09835 2.46967 6.62868 2.25 7.25 2.25H11.8789C12.0777 2.25003 12.269 2.28809 12.4527 2.36419C12.6364 2.44029 12.7986 2.54863 12.9392 2.68922L19.5608 9.31078C19.7014 9.4514 19.8097 9.61356 19.8858 9.79727C19.9619 9.98097 20 10.1723 20 10.3711Z"
          stroke="#2E8B57"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <Path
          d="M12.5 2.625V8.25C12.5 8.66421 12.6464 9.01777 12.9393 9.31066C13.2322 9.60355 13.5858 9.75 14 9.75H19.625M8.75 13.5H16.25M8.75 17.25H16.25"
          stroke="#2E8B57"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1035_17422">
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

export default ClientNoteIcon;
