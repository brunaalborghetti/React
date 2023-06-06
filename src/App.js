import React, { useState } from "react";
import "./App.css";
import ListaDeTarefas from "./components/ListaDeTarefas";
import FormularioAdicionarTarefa from "./components/FormularioAdicionarTarefa";

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (texto) => {
    if (texto.trim() !== "") {
      const novaTarefa = {
        id: Date.now(),
        texto,
        concluida: false,
      };
      setTarefas([...tarefas, novaTarefa]);
    }
  };

  const alternarStatusTarefa = (idTarefa) => {
    const tarefasAtualizadas = tarefas.map((tarefa) =>
      tarefa.id === idTarefa ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );
    setTarefas(tarefasAtualizadas);
  };

  const removerTarefa = (idTarefa) => {
    const tarefasAtualizadas = tarefas.filter((tarefa) => tarefa.id !== idTarefa);
    setTarefas(tarefasAtualizadas);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <FormularioAdicionarTarefa onAdicionarTarefa={adicionarTarefa} />
      <ListaDeTarefas
        tarefas={tarefas}
        onAlternarStatus={alternarStatusTarefa}
        onRemoverTarefa={removerTarefa}
      />
    </div>
  );
}

export default App;
