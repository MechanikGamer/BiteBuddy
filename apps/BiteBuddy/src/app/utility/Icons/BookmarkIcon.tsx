import React from 'react';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';

const HeartIcon = ({ fill = 'white', width = 24, height = 24 }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_1_122)">
      <Path
        d="M17.5 1.91653C16.3739 1.93405 15.2724 2.24839 14.3067 2.82781C13.341 3.40722 12.5453 4.2312 12 5.21653C11.4546 4.2312 10.6589 3.40722 9.6932 2.82781C8.7275 2.24839 7.62601 1.93405 6.49996 1.91653C4.7049 1.99453 3.01366 2.77979 1.79574 4.10077C0.577818 5.42175 -0.0677922 7.17106 -4.17093e-05 8.96653C-4.17093e-05 13.5135 4.78596 18.4795 8.79996 21.8465C9.69618 22.5997 10.8293 23.0126 12 23.0126C13.1706 23.0126 14.3037 22.5997 15.2 21.8465C19.214 18.4795 24 13.5135 24 8.96653C24.0677 7.17106 23.4221 5.42175 22.2042 4.10077C20.9863 2.77979 19.295 1.99453 17.5 1.91653Z"
        fill={fill}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_122">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default HeartIcon;
