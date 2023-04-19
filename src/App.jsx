import { useEffect, useState } from "react";
import "./App.css";
import { InputBox } from "./components/InputBox";

function App() {
  const [data, setData] = useState([]);
  const printData = () => {
    console.log(data);
  };
  const AddField = () => {
    setData((prevData) => [
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

        {data.map((item, id) => (
          <div style={{ display: "flex" }}>
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
