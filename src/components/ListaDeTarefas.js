import React from "react";

function ListaDeTarefas({ tarefas, onAlternarStatus, onRemoverTarefa }) {
  return (
    <ul className="lista-de-tarefas">
      {tarefas.map((tarefa) => (
        <li
          key={tarefa.id}
          className={`item-tarefa ${tarefa.concluida ? "concluida" : ""}`}
        >
          <label>
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => onAlternarStatus(tarefa.id)}
            />
            {tarefa.texto}
          </label>
          <button onClick={() => onRemoverTarefa(tarefa.id)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}

export default ListaDeTarefas;
