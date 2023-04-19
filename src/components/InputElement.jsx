import styles from "./inputBox.module.css";

export const InputElement = ({ setData, id, name }) => {
  console.log(name);
  const updateName = (e) => {
    setData((prevstate) =>
      prevstate.map((data, dataId) =>
        dataId === id ? { ...data, name: e.target.value } : data
      )
    );
  };
  const updateType = (e) => {
    if (e.target.value === "OBJECT") {
    }
    setData((prevstate) =>
      prevstate.map((data, dataId) => {
        console.log(prevstate);
        return dataId === id ? { ...data, type: e.target.value } : data;
      })
    );
  };
  return (
    <div className={styles.inputBox}>
      <input
        className={styles.input}
        value={name}
        onChange={updateName}
      ></input>
      <select name="cars" id="cars" onChange={updateType}>
        <option value="STRING">STRING</option>
        <option value="BOOLEAN">BOOLEAN</option>
        <option value="INTEGER">INTEGER</option>
        <option value="OBJECT">OBJECT</option>
      </select>
    </div>
  );
};
