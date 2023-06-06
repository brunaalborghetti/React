import React, { useState } from "react";

function FormularioAdicionarTarefa({ onAdicionarTarefa }) {
  const [textoTarefa, setTextoTarefa] = useState("");

  const handleInputChange = (event) => {
    setTextoTarefa(event.target.value);
  };

  const handleAdicionarTarefa = () => {
    if (textoTarefa.trim() !== "") {
      onAdicionarTarefa(textoTarefa);
      setTextoTarefa("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={textoTarefa}
        onChange={handleInputChange}
      />
      <button onClick={handleAdicionarTarefa}>Adicionar Tarefa</button>
    </div>
  );
}

export default FormularioAdicionarTarefa;
