import { fallbackVar, style } from "@vanilla-extract/css";
import { app } from "./layer.css";
import { fontSizeVar, primaryVar } from "./variables.css";

/**
 * CSS class for container
 */
export const container = style({
  "@layer": {
    [app]: {
      background: fallbackVar(primaryVar, "red"),
      fontSize: fallbackVar(fontSizeVar, "16px"),
    },
  },
});
