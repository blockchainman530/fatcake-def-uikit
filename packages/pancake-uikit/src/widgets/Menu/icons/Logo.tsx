import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 160 70" {...props}>
      <image width="120" height="70" href="/images/menu/logo.png" />
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
