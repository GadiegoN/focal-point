"use client";

import Trash from "@/assets/images/Icon.svg";
import Image from "next/image";
import styles from "./task-item.module.scss";
import { useState } from "react";

interface TaskItemProps {
  taskTitle: string;
  onDelete: () => void;
}

export function TaskItem({ taskTitle, onDelete }: TaskItemProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className={styles.container}>
      <label className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCheckboxChange}
          className={styles.checkbox}
        />
        <span className={styles.checkmark}></span>
      </label>

      <span
        className={`${styles.title} ${isCompleted ? styles.completed : ""}`}
      >
        {taskTitle}
      </span>

      <button className={styles.deleteButton} onClick={onDelete}>
        <Image src={Trash} width={18} height={20} alt="Icone lixeira" />
      </button>
    </div>
  );
}
