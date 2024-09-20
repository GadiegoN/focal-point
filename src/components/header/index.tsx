import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import styles from "./header.module.scss";
import { Heading } from "../headding";
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br";

dayjs.locale(ptBR);

export function Header() {
  const date = dayjs().format("dddd, DD [de] MMMM [de] YYYY");

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Image src={Logo} alt="Logo focal point" width={150} height={36} />

        <Heading variant="title">Bem vindo de volta, Gadiego</Heading>

        <Heading variant="subtitle">{date}</Heading>
      </div>
    </header>
  );
}
