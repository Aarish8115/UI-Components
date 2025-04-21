import { PropsWithChildren } from "react";
import clsx from "clsx";
type AlertProps = PropsWithChildren<{
  variant: "success" | "info" | "warning" | "error";
  size: "sm" | "md" | "lg";
}>;

export const AlertMessage = ({
  variant = "success",
  size = "md",
}: AlertProps) => {
  const variantStyles: Record<AlertProps["variant"], string> = {
    success: "bg-green-600/30 text-green-700 border-green-600",
    info: "bg-blue-600/30 text-blue-700 border-blue-600",
    error: "bg-red-600/30 text-red-700 border-red-600",
    warning: "bg-yellow-600/30 text-yellow-700 border-yellow-600",
  };
  const sizeStyle: Record<AlertProps["size"], string> = {
    sm: "text-sm rounded-lg px-3 py-2",
    md: "text-base rounded-xl px-4 py-3",
    lg: "text-lg rounded-2xl px-5 py-4",
  };
  const classNames = clsx(
    sizeStyle[size],
    variantStyles[variant],
    "border-2  m-2 svatopluk-medium"
  );

  return <span className={classNames}>This is a {variant} alert.</span>;
};
