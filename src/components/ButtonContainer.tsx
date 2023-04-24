import styles from "./inputBox.module.css";
import addImage from "../images/add.png";
import deleteImage from "../images/delete.png";
import classnames from "classnames";
import React from "react";
type buttonProps = {
  setData: any;
  setChild: any;
  id: any;
  item: any;
};
export const ButtonContainer = ({
  setData,
  setChild,
  id,
  item,
}: buttonProps) => {
  const toggleRequired = () => {
    setData((prevstate: any) =>
      prevstate.map((data: any, dataId: number) =>
        dataId === id ? { ...data, required: !data.required } : data
      )
    );
  };
  const addChild = () => {
    setChild((prevstate: any) => [
      ...prevstate,
      { name: "addName", type: "STRING", required: false, child: [] },
    ]);
  };

  const deleteitem = () => {
    setData((prevstate: any) =>
      prevstate.filter((data: any, dataId: number) => {
        if (dataId === id) {
          return false;
        }
        return true;
      })
    );
  };
  return (
    <div className={styles.buttonsContainer}>
      <span className={styles.requiredText}>Required</span>
      <div
        className={classnames(
          styles.requiredButton,
          item.required ? styles.active : ""
        )}
        onClick={toggleRequired}
      >
        <div className={styles.toggleButton}></div>
      </div>

      {item.type === "OBJECT" ? (
        <button className={styles.button} onClick={addChild}>
          <img className={styles.pngButton} src={addImage} alt="addButton" />
        </button>
      ) : (
        ""
      )}
      <button className={styles.button} onClick={deleteitem}>
        <img
          className={styles.pngButton}
          src={deleteImage}
          alt="deleteButton"
        />
      </button>
    </div>
  );
};
