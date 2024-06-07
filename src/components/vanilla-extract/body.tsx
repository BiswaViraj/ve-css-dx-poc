import React from "react";

export default function Body({
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
  return (
    <div style={style} className={classes}>
      Body
    </div>
  );
}
