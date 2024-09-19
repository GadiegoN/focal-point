import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "ghost";
}

export function Button({
  variant = "default",
  children,
  className,
  ...props
}: ButtonProps) {
  const classNames = `${styles.button} ${styles[variant]} ${className || ""}`;

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
}
