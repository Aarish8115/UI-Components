import { InputHTMLAttributes, FC } from "react";
import clsx from "clsx";
interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant: "default" | "focus" | "error" | "disabled";
  size: "sm" | "md" | "lg";
}

export const Input: FC<InputProps> = ({
  variant = "default",
  size = "md",
  ...props
}: InputProps) => {
  const variantStyles: Record<InputProps["variant"], string> = {
    default: "",
    focus: "border-gray-600 border-[1.5px]",
    error: " border-red-500 border-[1.5px] focus:border-red-500",
    disabled: "cursor-not-allowed bg-gray-100",
  };
  const sizeStyle: Record<InputProps["size"], string> = {
    sm: "text-sm rounded-lg px-3 py-2",
    md: "text-base rounded-xl px-4 py-3",
    lg: "text-lg rounded-2xl px-5 py-4",
  };
  const classNames = clsx(
    sizeStyle[size],
    variantStyles[variant],
    "m-2 svatopluk-regular outline-none border border-gray-300 focus:border-gray-600"
  );

  return (
    <>
      <input
        className={classNames}
        placeholder="Text here"
        disabled={variant === "disabled" ? true : false}
        {...props}
      />
      {variant === "error" ? (
        <p className="svatopluk-regular text-xs text-red-400 mx-3">
          Invalid text
        </p>
      ) : (
        ""
      )}
    </>
  );
};
