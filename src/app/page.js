"use client";
import { useEffect, useState } from "react";
import TasksComponent from "../components/tasks/tasks";
import {Stack, TextField, Button} from '@mui/material';

export default function Home() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      setTasks(JSON.parse(tasks));
    }
  }
  , []);

  function handleChange(event) {
    setText(event.target.value);
  }

  function addtasks() {
    if (text !== "") {
    const copyTasks = tasks.slice();
    copyTasks.push(text);
    setTasks(copyTasks);
    setText("");
    localStorage.setItem("tasks", JSON.stringify(copyTasks));
    }


  }

  function deleteTask(task) {
    console.log(task);
    const copyTasks = tasks.slice();
    const index = copyTasks.indexOf(task);
    copyTasks.splice(index, 1);
    setTasks(copyTasks);
    localStorage.setItem("tasks", JSON.stringify(copyTasks));
  }


  return (
    <>
    <div>
    <Stack direction="row" p={2} spacing={2}  >
    <TextField id="outlined-basic"
      label="Tarea"
      variant="outlined"
      value={text}
      type="text"
      onChange={handleChange}
      fullWidth
     />
    <Button variant="contained" color="primary" onClick={addtasks}> Agregar
    </Button>
    
    </Stack>
    </div>
    <div className="px-24 py-6 ">
      <table className=" border-collapse border border-white">
      <thead>
        <tr>
          <th>Tasks</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((tasklist, index) => (
          <TasksComponent key={index} task={tasklist}  remove={deleteTask}/>
        ))}
      </tbody>
      </table>
    </div>
    </>
  );
}
