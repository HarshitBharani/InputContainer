import styles from "./inputBox.module.css";
import addImage from "../images/add.png";
import deleteImage from "../images/delete.png";
import classnames from "classnames";

export const ButtonContainer = ({ setData, setChild, type, id, item }) => {
  console.log(item);
  const toggleRequired = () => {
    setData((prevstate) =>
      prevstate.map((data, dataId) =>
        dataId === id ? { ...data, required: !data.required } : data
      )
    );
  };
  const addChild = () => {
    setChild((prevstate) => [
      ...prevstate,
      { name: "addName", type: "STRING", required: false, child: [] },
    ]);
  };

  const deleteitem = () => {
    setData((prevstate) =>
      prevstate.filter((data, dataId) => {
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
