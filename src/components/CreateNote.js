import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Zoom } from "@mui/material";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expand, setExpand] = useState(false);

  function handleExpand() {
    setExpand(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form
        className="create-note"
        onSubmit={(event) => event.preventDefault()}
        // onBlur={handleExpand}
      >
        {expand && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}

        <textarea
          onChange={handleChange}
          onClick={handleExpand}
          name="content"
          placeholder="Take a note"
          value={note.content}
          rows={expand ? 3 : 1}
        />
        <Zoom in={expand}>
          <Fab
            onClick={() => {
              props.addNotes(note);
              setNote({ title: "", content: "" });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
