import { useState } from "react";

export function TaskForm({ AddTask }) {
    const [input, setInput] = useState("");
  return (
    <div className="flex">
      <label className="input input-bordered flex items-center gap-2">
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className="grow" placeholder="Ajouter une tâche" />
      </label>

      <button onClick={() => AddTask(input)} className="btn btn-primary">
        +
      </button>
    </div>
  );
}
