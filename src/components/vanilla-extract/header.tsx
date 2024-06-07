import { container } from "@/components/vanilla-extract/css/novu.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import React from "react";
import { fontSizeVar, primaryVar } from "./css/variables.css";

export default function NovuHeader({
  vars,
  classes,
  style,
}: {
  vars?: {
    brandColor?: string;
    fontSize?: string;
  };
  classes?: string;
  style?: React.CSSProperties;
}) {
  const combinedClasses = `${container} ${classes}`;
  return (
    <div
      style={{
        ...assignInlineVars({
          [primaryVar]: vars?.brandColor,
          [fontSizeVar]: vars?.fontSize,
        }),
        ...style,
      }}
      className={combinedClasses}
    >
      Header
    </div>
  );
}
