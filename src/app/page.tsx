import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Heading } from "@/components/headding";

export default function Home() {
  return (
    <main>
      <Card>
        <Heading varaint="subtitle">Suas tarefas de hoje</Heading>
        <Heading varaint="subtitle">Tarefas finalizadas</Heading>
      </Card>

      <Button>Adicionar nova tarefa</Button>
    </main>
  );
}
