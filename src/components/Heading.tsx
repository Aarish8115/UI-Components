import React from "react";
import { PropsWithChildren } from "react";
import clsx from "clsx";

type HeadingProps = PropsWithChildren<{
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  weight: "light" | "regular" | "medium" | "semibold" | "bold";
  font: "default" | "italic";
  color: "default" | "muted" | "primary" | "secondary" | "accent";
  transform: "capitalize" | "uppercase" | "lowercase";
  alignment: "left" | "center" | "right" | "justify";
}>;

export const Heading = ({
  children,
  variant,
  size = "md",
  weight = "regular",
  color = "default",
  font = "default",
  transform = "capitalize",
  alignment = "left",
}: HeadingProps) => {
  const sizeStyles: Record<HeadingProps["size"], string> = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
    "2xl": "text-3xl",
    "3xl": "text-4xl",
  };
  const weightStyles: Record<HeadingProps["weight"], string> = {
    light: "svatopluk-light",
    regular: "svatopluk-regular",
    medium: "svatopluk-medium",
    semibold: "svatopluk-semibold",
    bold: "svatopluk-bold",
  };
  const fontStyles: Record<HeadingProps["font"], string> = {
    default: "",
    italic: "italic",
  };
  const colorStyles: Record<HeadingProps["color"], string> = {
    default: "text-black",
    muted: "text-gray-500",
    primary: "text-blue-500",
    secondary: "text-green-700",
    accent: "text-orange-400",
  };
  const transformStyles: Record<HeadingProps["transform"], string> = {
    capitalize: "capitalize",
    uppercase: "uppercase",
    lowercase: "lowercase",
  };
  const alignmentStyle: Record<HeadingProps["alignment"], string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  const className = clsx(
    sizeStyles[size],
    weightStyles[weight] + fontStyles[font],
    colorStyles[color],
    transformStyles[transform],
    alignmentStyle[alignment]
  );

  return React.createElement(
    variant,
    {
      className,
    },
    children
  );
};
