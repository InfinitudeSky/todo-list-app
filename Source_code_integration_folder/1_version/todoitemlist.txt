import List from '@mui/material/List';
import TodoItem from './TodoItem';
import Box from '@mui/material/Box';

const TodoItemList = (props) => {
  const todoList = props.todoItemList.map((todoItem) => {
    return (
      <TodoItem
        key={todoItem.id}
        todoItem={todoItem}
        onTodoItemClick={props.onTodoItemClick}
        onRemoveClick={props.onRemoveClick}
      />
    );
  });

  return (
    <Box>
      <List sx={{ margin: "auto", maxWidth: 720 }}>
        {todoList}
      </List>
    </Box>
  );
};

export default TodoItemList;