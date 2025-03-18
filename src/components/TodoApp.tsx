import { useState } from "react";
import { ListItem } from "./ListItem/ListItem";
import { TaskForm } from "./TaskForm/TaskForm";
import { Item } from "./ListItem/Item";

export function TodoApp() {
  const [items, setItems] = useState([
    { titre: "manger des oranges", done: false, id: 1 },
    { titre: "manger des pommes", done: true, id: 2 },
    { titre: "manger des pommes", done: false, id: 3 },
    { titre: "manger des pommes", done: true, id: 4 },
  ]);

  const sortedItems = [...items].sort((a, b) => {
    console.log("sortedItems", a.done, b.done);
    if (a.done && !b.done) return 1;
    return -1;
  });

  function AddTask(titreTask) {
    setItems([
      ...items,
      { titre: titreTask, done: false, id: new Date().getTime() },
    ]);
  }

  function changeDone(id) {
    items.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    setItems([...items]);
  }

  function deleteItem(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }


  return (
    <>
      <TaskForm AddTask={AddTask}></TaskForm>
      <ListItem>
        {sortedItems.map((item) => (
          <Item
            titre={item.titre}
            done={item.done}
            key={item.id}
            onChecked={() => changeDone(item.id)}
            onDelete={() => deleteItem(item.id)}
          ></Item>
        ))}
      </ListItem>
    </>
  );
}
