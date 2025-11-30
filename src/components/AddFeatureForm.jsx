import { use, useState } from "react";

export default function AddFeatureForm ({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();

    onAdd({
      id: crypto.randomUUID(),
      title,
      description
    });

    setTitle("");
    setDescription("");
  }

  return(
    <form onSubmit={handleSumbit}>
      <input 
        placeholder="Titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input 
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Añadir</button>
    </form>
  );
}