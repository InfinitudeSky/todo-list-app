import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Box from '@mui/material/Box';

const TodoItemInputField = (props) => {
  const [input, setInput] = useState("");

  const onSubmit = () => {
    if (input.trim()) {
      props.onSubmit(input);
      setInput("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
      <TextField
        id='todo-item-input'
        label='Todo Item'
        variant='outlined'
        fullWidth
        value={input}
        onChange={(user) => setInput(user.target.value)}
        onKeyDown={handleKeyDown}
        sx={{ mr: 1 }}
      />
      <Button variant="contained" onClick={onSubmit} color="primary">Submit</Button>
    </Box>
  );
};

export default TodoItemInputField;