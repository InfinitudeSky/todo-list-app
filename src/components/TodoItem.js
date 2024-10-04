import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const TodoItem = (props) => {
  const style = props.todoItem.isFinished ? { textDecoration: "line-through", color: "gray" } : {};

  return (
    <Paper elevation={1} sx={{ mb: 1, padding: 1 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <span style={style} onClick={() => props.onTodoItemClick(props.todoItem)}>
          {props.todoItem.todoItemContent}
        </span>
        <Button variant="outlined" onClick={() => props.onRemoveClick(props.todoItem)} color="error">
          Remove
        </Button>
      </Box>
    </Paper>
  );
};

export default TodoItem;
