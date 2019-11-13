import React from "react";

function Board(props) {
  const drop = e => {
    e.preventDefault();
    const element_id = e.dataTransfer.getData("element_id");

    const element = document.getElementById(element_id);
    element.style.display = "block";

    e.target.appendChild(element);
  };

  const dragOver = e => {
    e.preventDefault();
  };
  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}

export default Board;
