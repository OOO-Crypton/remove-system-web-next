import { useState } from "react";
import styles from "./InfoAll.module.scss";

interface HeadDataInterface {
  workers: number;
  gpu: number;
  w: number;
  coin: number;
}

const InfoAll = () => {
  const [headData, setHeadData] = useState<HeadDataInterface | undefined>(undefined);
  return (
    <div className={styles.dataDiv}>
      <div className={styles.div}>
        <p className={styles.dataText}>{headData?.workers ?? 0}</p>
        <p className={styles.text}>
          <b>Workers</b>
        </p>
      </div>
      <div className={styles.div}>
        <p className={styles.dataText}>{headData?.gpu ?? 0}</p>
        <p className={styles.text}>
          <b>GPU</b>
        </p>
      </div>
      <div className={styles.div}>
        <p className={styles.dataText}>{(headData?.w ?? 0) + " W"}</p>
        <p className={styles.text}>
          <b>Потребление</b>
        </p>
      </div>
      <div className={styles.div}>
        <p className={styles.dataText}>{(headData?.coin ?? 0) + " Mh/s"}</p>
        <p className={styles.text}>
          <b>Хэшрейт</b>
        </p>
      </div>
    </div>
  );
};
export default InfoAll;
