import { PropsWithChildren } from "react";
import clsx from "clsx";

type LabelProps = PropsWithChildren<{
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  font: "default" | "italic";
  weight: "light" | "regular" | "medium" | "semibold" | "bold";
  alignment: "left" | "center" | "right" | "justify";
  lineheight: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
  letterspacing: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";
}>;

export const Label = ({
  children,
  size = "md",
  weight = "regular",
  font = "default",
  alignment = "left",
  lineheight = "normal",
  letterspacing = "normal",
}: LabelProps) => {
  const sizeStyles: Record<LabelProps["size"], string> = {
    xs: "text-sm",
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
    "2xl": "text-3xl",
    "3xl": "text-4xl",
  };
  const weightStyles: Record<LabelProps["weight"], string> = {
    light: "svatopluk-light",
    regular: "svatopluk-regular",
    medium: "svatopluk-medium",
    semibold: "svatopluk-semibold",
    bold: "svatopluk-bold",
  };
  const fontStyles: Record<LabelProps["font"], string> = {
    default: "",
    italic: "italic",
  };
  const alignmentStyle: Record<LabelProps["alignment"], string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };
  const lineHeightStyle: Record<LabelProps["lineheight"], string> = {
    none: "leading-none",
    tight: "leading-tight",
    snug: "leading-snug",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose",
  };
  const letterSpacingStyle: Record<LabelProps["letterspacing"], string> = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    widest: "tracking-widest",
  };

  const className = clsx(
    sizeStyles[size],
    weightStyles[weight] + fontStyles[font],
    alignmentStyle[alignment],
    lineHeightStyle[lineheight],
    letterSpacingStyle[letterspacing]
  );

  return <p className={className}>{children}</p>;
};
