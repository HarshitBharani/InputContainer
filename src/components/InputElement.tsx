import { dataType } from "../App";
import styles from "./inputBox.module.css";
import React from "react";
interface InputElementProps {
  setData: Function;
  id: number;
  name: string;
}
export const InputElement = ({ setData, id, name }: InputElementProps) => {
  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevstate: dataType[]) =>
      prevstate.map((data, dataId) =>
        dataId === id ? { ...data, name: e.target.value } : data
      )
    );
  };
  const updateType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "OBJECT") {
    }
    setData((prevstate: dataType[]) =>
      prevstate.map((data, dataId) => {
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
