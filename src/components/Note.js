import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>

      {/* <h1>This is the note Title</h1>
      <p>This is the note content</p> */}
    </div>
  );
}

export default Note;
