"use client";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Dialog } from "@/components/dialog";
import { Heading } from "@/components/headding";
import { Input } from "@/components/input";
import { TaskItem } from "@/components/task-item";
import { useState } from "react";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <main>
        <Card>
          <Heading varaint="subtitle">Suas tarefas de hoje</Heading>

          <TaskItem taskTitle="Tarefa" onDelete={() => {}} />

          <Heading varaint="subtitle">Tarefas finalizadas</Heading>
        </Card>

        <Button onClick={openDialog}>Adicionar nova tarefa</Button>
      </main>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
        <Heading varaint="card-title">Nova tarefa</Heading>

        <form>
          <div>
            <Heading varaint="text">Título</Heading>
            <Input placeholder="Digite" />
          </div>
          <Button>Adicionar</Button>
        </form>
      </Dialog>
    </>
  );
}
