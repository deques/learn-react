import React from "react";
import { useState } from "react";
let counter = 0;

function MinutesToHours() {
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState();
  const onChange = (event) => {
    setMinutes(event.target.value);
  };

  return (
    <>
      <label htmlFor="minutes">Minutes</label>
      <input
        value={minutes}
        id="minutes"
        placeholder="Minutes"
        type="number"
        onChange={onChange}
      />
      <label htmlFor="hours">Hours</label>
      <input
        value={minutes / 60}
        id="hours"
        placeholder="Hours"
        type="number"
      />
    </>
  );
}

function KmToMiles() {
  return <h3>KM to Miles</h3>;
}

function CountUp() {
  const [index, setIndex] = useState("0");

  const onSelect = (event) => {
    setIndex(event.target.value);
  };

  return (
    <div>
      <h1>Super converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="0">Minutes and hours</option>
        <option value="1">KM and Miles</option>
      </select>
      <br />
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

export default CountUp;
