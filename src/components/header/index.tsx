import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import styles from "./header.module.scss";
import { Heading } from "../headding";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Image src={Logo} alt="Logo focal point" width={150} height={36} />

        <Heading variant="title">Bem vindo de volta, Gadiego</Heading>

        <Heading variant="subtitle">Segunda, 01 de dezembro de 2025</Heading>
      </div>
    </header>
  );
}
