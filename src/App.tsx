import { useState } from "react";
import "./App.css";
import { InputBox } from "./components/InputBox";
import React from "react";
export interface dataType {
  name: string;
  type: string;
  required: boolean;
  child: dataType[];
}

function App() {
  const [data, setData] = useState<dataType[]>([]);
  const printData = () => {
    console.table(data);
  };

  const AddField = () => {
    setData((prevData: dataType[]) => [
      ...prevData,
      { name: "addName", type: "STRING", required: false, child: [] },
    ]);
  };
  return (
    <div className="app">
      <section className="inputSection">
        <div className="headingBox">
          <h1 className="heading">Field name and type</h1>
          <button className="headingButton" onClick={AddField}>
            +
          </button>
        </div>

        {data.map((item: dataType, id: number) => (
          <div key={id} style={{ display: "flex" }}>
            <span>{id}</span>
            <InputBox item={item} setData={setData} id={id} />
          </div>
        ))}
      </section>
      <button className="printButton" onClick={printData}>
        Print Data
      </button>
    </div>
  );
}

export default App;
