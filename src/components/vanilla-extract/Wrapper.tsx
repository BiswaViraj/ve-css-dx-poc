import React from "react";
import NovuHeader from "./header";
import Body from "./body";

type NovuStyles = {
  header?: React.CSSProperties;
  body?: React.CSSProperties;
};

type NovuClassNames = {
  header?: string;
  body?: string;
};

type NovuProps = {
  styles?: NovuStyles;
  classNames?: NovuClassNames;
  classes?: string;
  style?: React.CSSProperties;
};

export default function Wrapper({
  styles,
  classNames,
  classes,
  style,
}: NovuProps) {
  return (
    <div style={style} className={classes}>
      <NovuHeader style={styles?.header} classes={classNames?.header} />
      <Body style={styles?.body} classes={classNames?.body} />
    </div>
  );
}
