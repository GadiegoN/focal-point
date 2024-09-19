import { ReactNode } from "react";
import styles from "./heading.module.scss";

interface HeadingProps {
  varaint: "title" | "subtitle" | "text";
  children: ReactNode;
}

export function Heading({ varaint, children }: HeadingProps) {
  switch (varaint) {
    case "title":
      return <h1 className={styles.h1}>{children}</h1>;
    case "subtitle":
      return <h2 className={styles.h2}>{children}</h2>;
    case "text":
      return <p className={styles.p}>{children}</p>;
    default:
      return null;
  }
}
