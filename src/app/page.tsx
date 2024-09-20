"use client";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Dialog } from "@/components/dialog";
import { Heading } from "@/components/headding";
import { Input } from "@/components/input";
import { TaskItem } from "@/components/task-item";
import { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Task {
  id: string;
  task: string;
  isCompleted: boolean;
}

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDialogDelete, setIsDialogDelete] = useState(false);
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [deleteTaskId, setDeleteTaskId] = useState<string>("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Tarefas salvas no localStorage:", tasks);
  }, [tasks]);

  function handleAddTask(taskTitle: string) {
    const newTask = { id: uuidv4(), task: taskTitle, isCompleted: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    console.log("Nova tarefa adicionada:", newTask);
    setNewTask("");
    setIsDialogOpen(false);
  }

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    if (newTask.trim()) {
      handleAddTask(newTask);
    }
  }

  function toggleTaskComplete(taskId: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  function handleDeleteTask(taskId: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setIsDialogDelete(false);
  }

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  const closeDialogDelete = () => setIsDialogDelete(false);

  function selectedTaskId(taskId: string) {
    setIsDialogDelete(true);
    setDeleteTaskId(taskId);
  }

  const completedTasks = tasks.filter((task) => task.isCompleted);
  const incompleteTasks = tasks.filter((task) => !task.isCompleted);

  return (
    <>
      <main>
        <Card>
          <Heading variant="subtitle">Suas tarefas de hoje</Heading>

          {incompleteTasks.length > 0 ? (
            incompleteTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={() => toggleTaskComplete(task.id)}
                onDelete={() => selectedTaskId(task.id)}
              />
            ))
          ) : (
            <Heading variant="text">Nenhuma tarefa pendente.</Heading>
          )}

          <Heading variant="subtitle">Tarefas finalizadas</Heading>

          {completedTasks.length > 0 ? (
            completedTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={() => toggleTaskComplete(task.id)}
                onDelete={() => selectedTaskId(task.id)}
              />
            ))
          ) : (
            <Heading variant="text">Nenhuma tarefa concluída.</Heading>
          )}
        </Card>

        <Button onClick={openDialog}>Adicionar nova tarefa</Button>
      </main>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
        <Heading variant="card-title">Nova tarefa</Heading>

        <form onSubmit={handleFormSubmit}>
          <div>
            <Heading variant="text">Título</Heading>
            <Input
              placeholder="Digite"
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          </div>
          <Button type="submit">Adicionar</Button>
        </form>
      </Dialog>

      <Dialog isOpen={isDialogDelete} onClose={closeDialogDelete}>
        <Heading variant="card-title">Deletar tarefa</Heading>

        <Heading variant="subtitle">
          Tem certeza que você deseja deletar essa tarefa?
        </Heading>

        <Button
          variant="destructive"
          onClick={() => handleDeleteTask(deleteTaskId)}
        >
          Deletar
        </Button>
      </Dialog>
    </>
  );
}
