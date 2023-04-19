import { useEffect, useState } from "react";
import styles from "./inputBox.module.css";
import { ButtonContainer } from "./ButtonContainer";
import { InputElement } from "./InputElement";

export const InputBox = ({ item, id, setData }) => {
  const [child, setChild] = useState([]);
  useEffect(() => {
    setData((prevstate) =>
      prevstate.map((data, dataId) =>
        dataId === id ? { ...data, child: child } : data
      )
    );
  }, [setData, child, item.id]);

  return (
    <section className={styles.section}>
      <div className={styles.inputBox}>
        <InputElement setData={setData} id={id} name={item.name} />
        <ButtonContainer
          setChild={setChild}
          setData={setData}
          id={id}
          item={item}
        />
        <hr></hr>

        {item.type === "OBJECT"
          ? child.map((child, id) => (
              <InputBox item={child} id={id} setData={setChild} />
            ))
          : ""}
      </div>
    </section>
  );
};