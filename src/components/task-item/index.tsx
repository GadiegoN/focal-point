import Trash from "@/assets/images/Icon.svg";
import Image from "next/image";
import styles from "./task-item.module.scss";

interface Task {
  id: string;
  task: string;
  isCompleted: boolean;
}
interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className={styles.container}>
      <label className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={onToggle}
          className={styles.checkbox}
        />
        <span className={styles.checkmark}></span>
      </label>

      <span
        className={`${styles.title} ${
          task.isCompleted ? styles.completed : ""
        }`}
      >
        {task.task}
      </span>

      <button className={styles.deleteButton} onClick={onDelete}>
        <Image src={Trash} width={18} height={20} alt="Icone lixeira" />
      </button>
    </div>
  );
}
