"use client";
import { Stack, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function page() {
  const [text, setText] = useState("");
  const [mensajes, setMensajes] = useState([]);

  function handleChange(event) {
    setText(event.target.value);
  }
  function addMensaje() {
    if (text !== "") {
      const copyMensajes = mensajes.slice();
      copyMensajes.push(text);
      setMensajes(copyMensajes);
      setText("");
    }
  }

  return (
    <Stack p={8} spacing={2} height="100%">

      <Stack  flexBasis="calc(100% - 60px)" spacing={1} sx={{overflowY: "auto" }}>
        {mensajes.map((mensaje, index) => (
            <Stack flexShrink={0} width="80%" height="50px" className="rounded-lg bg-slate-300"  sx={{alignSelf: "end"}}>
                <Stack  direction="row" justifyContent="space-between" p={2}>
                    <Stack>
                    <p>{mensaje}</p>
                    </Stack>
                </Stack>

        </Stack>
          ))}

      </Stack>

      

      <Stack flexShrink={0} direction="row" p-x={2} spacing={2}>
        <TextField
          id="outlined-basic"
          label="Tarea"
          variant="outlined"
          value={text}
          type="text"
          onChange={handleChange}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={addMensaje}>
          {" "}
          Agregar
        </Button>
      </Stack>
    </Stack>
  );
}
