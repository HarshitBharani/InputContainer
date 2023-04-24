import { useEffect, useState } from "react";
import styles from "./inputBox.module.css";
import { ButtonContainer } from "./ButtonContainer";
import { InputElement } from "./InputElement";
import { dataType } from "../App";
import React from "react";
interface inputBoxProps {
  item: dataType;
  id: number;
  setData: Function;
}
export const InputBox = ({ item, id, setData }: inputBoxProps) => {
  const [child, setChild] = useState([]);
  useEffect(() => {
    setData((prevstate: dataType[]) =>
      prevstate.map((data, dataId) =>
        dataId === id ? { ...data, child: child } : data
      )
    );
  }, [setData, child, id]);

  return (
    <section className={styles.section}>
      <div className={styles.inputBox}>
        <div className={styles.hoverClass}>
          <InputElement setData={setData} id={id} name={item.name} />
          <ButtonContainer
            setChild={setChild}
            setData={setData}
            id={id}
            item={item}
          />
          <hr></hr>
        </div>
        {item.type === "OBJECT"
          ? child.map((child, id) => (
              <InputBox key={id} item={child} id={id} setData={setChild} />
            ))
          : ""}
      </div>
    </section>
  );
};
