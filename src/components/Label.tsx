import { LabelHTMLAttributes } from "react";
import clsx from "clsx";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  size: "sm" | "md" | "lg";
  weight: "light" | "regular" | "medium" | "bold";
}

export const LabelComponent = ({
  children,
  size = "md",
  weight = "regular",
  ...props
}: LabelProps) => {
  const sizeStyles: Record<LabelProps["size"], string> = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
  };
  const weightStyles: Record<LabelProps["weight"], string> = {
    light: "svatopluk-light",
    regular: "svatopluk-regular",
    medium: "svatopluk-medium",
    bold: "svatopluk-bold",
  };

  const className = clsx(sizeStyles[size], weightStyles[weight]);

  return (
    <label className={className} {...props}>
      {children}
    </label>
  );
};
