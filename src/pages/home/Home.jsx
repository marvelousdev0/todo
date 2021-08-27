import { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import List from "../../components/Todo/List";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleAddTodo(e) {
    e.stopPropagation();
    const length = todoList.length;
    setTodoList(todoList.concat([{ id: length, text: inputValue }]));
    setInputValue("");
  }

  function handleDeleteTodo(todo) {
    setTodoList(todoList.filter((t) => t.id !== todo.id));
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-extrabold">TODO</h1>
      <div className="flex items-center">
        <TextField
          label="Todo"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          size="small"
        />
        <Button variant="contained" color="secondary" onClick={handleAddTodo}>
          Add
        </Button>
      </div>
      <div>
        <List list={todoList} />
      </div>
    </div>
  );
}
