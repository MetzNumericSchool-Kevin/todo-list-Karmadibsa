import { useState } from "react";

export function Item({ titre, done, onChecked, onDelete }) {
  return (
    <div className="bg-indigo-700 w-full m-5 rounded-box p-3 flex">
      <span className="pr-8">
        <input
          onChange={onChecked}
          type="checkbox"
          className="checkbox"
          checked={done}
        />
      </span>
      <span className={done ? "line-through flex-grow" : "flex-grow"}>
        {titre}
      </span>
      <div>
        <button onClick={onDelete} className="btn btn-error btn-outline btn-xs">X</button>
      </div>
    </div>
  );
}
