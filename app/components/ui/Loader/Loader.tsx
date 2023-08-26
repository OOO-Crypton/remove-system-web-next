import styles from "./Loader.module.scss";
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

interface LoaderProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export const Loader = ({ className, ...props }: LoaderProps): JSX.Element => {
  return (
    <div className={styles.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export const LoaderSmall = ({ className, ...props }: LoaderProps): JSX.Element => {
  return (
    <div className={styles.ldsRingSmall}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
