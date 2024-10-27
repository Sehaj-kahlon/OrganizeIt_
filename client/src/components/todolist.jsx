import React from "react";
import { Divider } from "antd";
import "./todolist.css";
function Todolist() {
  const addRow = () => {
    console.log("Add row");
  };
  return (
    <div className="boxelement">
      <div className="heading">
        Today's To Do
        <Divider />
      </div>
      <div className="sub-heading">
        Add to your list
        <i className="fa-light fa-plus add" onClick={addRow}></i>
      </div>
      <Divider />
    </div>
  );
}

export default Todolist;
