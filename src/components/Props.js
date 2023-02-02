import React from "react";
import { useState } from "react";

function Btn({ name, changeValue }) {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        borderRadius: "10px",
        border: 0,
      }}
      onClick={changeValue}
    >
      {name}
    </button>
  );
}

function Buttons() {
  const [value, setValue] = useState("Save changes");
  const changeValue = () => setValue("Revert changes");
  return (
    <>
      <Btn name={value} changeValue={changeValue} />
      <Btn name="Confirm" />
    </>
  );
}

export default Buttons;
