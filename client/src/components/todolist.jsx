import React, { useState } from "react";
import { Divider, Button, Input } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import "./todolist.css";
function Todolist() {
  const [rows, setRows] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  const addRow = () => {
    setIdCounter(idCounter + 1);
    console.log(idCounter);
    setRows([...rows, { id: idCounter, text: "" }]);
  };
  const deleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };
  const handleInputChange = (id, value) => {
    setRows(rows.map((row) => (row.id === id ? { ...row, text: value } : row)));
  };

  return (
    <div className="boxelement">
      <div className="heading">
        Today's To Do
        <Divider />
      </div>
      <div className="sub-heading">
        Add to your list
        <Button icon={<PlusOutlined />} onClick={addRow}></Button>
      </div>
      <Divider />
      <div className="Row">
        {rows.map((row) => (
          <div key={row.id} className="row">
            <input type="checkbox" className="checkbox" />
            <Input
              value={row.text}
              onChange={(e) => handleInputChange(row.id, e.target.value)}
              placeholder="Enter task"
              className="input"
            />
            <Button
              icon={<DeleteOutlined />}
              onClick={() => deleteRow(row.id)}
              className="delete"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todolist;
