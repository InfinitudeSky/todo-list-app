import "./App.css";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TodoItemInputField from "./components/TodoItemInputField";
import TodoItemList from "./components/TodoItemList";

let todoItemId = 0;

const App = () => {
  const [todoItemList, setTodoItemList] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const onSubmit = (newTodoItem) => {
    setTodoItemList([
      ...todoItemList,
      {
        id: todoItemId++,
        todoItemContent: newTodoItem,
        isFinished: false,
      },
    ]);
  };

  const onTodoItemClick = (clickedTodoItem) => {
    setTodoItemList(
      todoItemList.map((todoItem) => {
        if (clickedTodoItem.id === todoItem.id) {
          return {
            ...todoItem,
            isFinished: !todoItem.isFinished,
          };
        }
        return todoItem;
      }),
    );
  };

  const onRemoveClick = (removeTodoItem) => {
    setTodoItemList(
      todoItemList.filter((todoItem) => todoItem.id !== removeTodoItem.id),
    );
  };

  const saveTodos = () => {
    localStorage.setItem("todoList", JSON.stringify(todoItemList));
    console.log("Todos saved:", todoItemList);
  };

  const loadTodos = () => {
    const savedTodos = localStorage.getItem("todoList");
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos);
      setTodoItemList(parsedTodos);
      todoItemId = parsedTodos.length;
      console.log("Todos loaded:", parsedTodos);
    } else {
      console.log("No saved todos found.");
    }
  };

  return (
    <div className="App">
      <Container sx={{ paddingTop: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Todo List
        </Typography>
        <TodoItemInputField onSubmit={onSubmit} />
        <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
          <Button variant="contained" onClick={saveTodos} color="primary">
            Save Todos
          </Button>
          <Button variant="contained" onClick={loadTodos} color="secondary">
            Load Todos
          </Button>
        </Box>
        <TodoItemList
          todoItemList={todoItemList}
          onTodoItemClick={onTodoItemClick}
          onRemoveClick={onRemoveClick}
        />
      </Container>
    </div>
  );
};

export default App;
