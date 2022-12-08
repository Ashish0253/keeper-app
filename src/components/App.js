import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateNote from "./CreateNote";

function App() {
  const [notes, setNotes] = useState([]);

  function addNotes(note) {
    setNotes((prevValue) => [...prevValue, note]);
  }

  function deleteNote(id) {
    setNotes((prevItems) => {
      return prevItems.filter((item, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateNote addNotes={addNotes} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
