import { InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export function Input({ placeholder, className, ...props }: InputProps) {
  return (
    <input
      className={`${styles.input} ${className || ""}`}
      placeholder={placeholder}
      {...props}
    />
  );
}
