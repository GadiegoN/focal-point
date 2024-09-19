import { ReactNode } from "react";
import styles from "./card.module.scss";

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return <div className={styles.cardContainer}>{children}</div>;
}
