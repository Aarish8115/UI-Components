import { PropsWithChildren, useState } from "react";
import clsx from "clsx";
import { FaXmark } from "react-icons/fa6";

type AlertProps = PropsWithChildren<{
  /** This is a variant */
  variant: "success" | "info" | "warning" | "error";
  /** This is a size variant */
  size: "sm" | "md" | "lg";
}>;
/** This is a doc */
export const AlertMessage = ({
  variant = "success",
  size = "md",
}: AlertProps) => {
  const [isHidden, setisHidden] = useState(false);
  const closeAlert = () => {
    setisHidden(true);
  };
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

  const baseClasses = clsx(
    sizeStyle[size],
    variantStyles[variant],
    "border-2 m-2 svatopluk-medium  gap-1 items-center"
  );

  return !isHidden ? (
    <span className={clsx(baseClasses, isHidden ? "hidden" : "inline-flex")}>
      This is a {variant} alert.
      <button onClick={closeAlert}>
        <FaXmark className="inline-block text-lg cursor-pointer " />
      </button>
    </span>
  ) : (
    <button
      onClick={() => {
        setisHidden(false);
      }}
      className="cursor-pointer rounded-4xl bg-blue-400 text-white px-4 py-2"
    >
      Show Alert
    </button>
  );
};
