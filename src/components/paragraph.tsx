import { PropsWithChildren } from "react";
import clsx from "clsx";

type ParagraphProps = PropsWithChildren<{
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  font: "default" | "italic";
  weight: "light" | "regular" | "medium" | "semibold" | "bold";
  alignment: "left" | "center" | "right" | "justify";
}>;

export const Paragraph = ({
  children,
  size = "md",
  weight = "regular",
  font = "default",
  alignment = "left",
}: ParagraphProps) => {
  const sizeStyles: Record<ParagraphProps["size"], string> = {
    xs: "text-sm",
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
    "2xl": "text-3xl",
    "3xl": "text-4xl",
  };
  const weightStyles: Record<ParagraphProps["weight"], string> = {
    light: "svatopluk-light",
    regular: "svatopluk-regular",
    medium: "svatopluk-medium",
    semibold: "svatopluk-semibold",
    bold: "svatopluk-bold",
  };
  const fontStyles: Record<ParagraphProps["font"], string> = {
    default: "",
    italic: "italic",
  };
  const alignmentStyle: Record<ParagraphProps["alignment"], string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  const className = clsx(
    sizeStyles[size],
    weightStyles[weight] + fontStyles[font],
    alignmentStyle[alignment]
  );

  return <p className={className}>{children}</p>;
};
