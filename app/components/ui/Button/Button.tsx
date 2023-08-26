import { ButtonProps } from "./Button.props";
import cn from "clsx";
import styles from "./Button.module.scss";
import { FC } from "react";

export const Button: FC<ButtonProps> = ({ appearance, hover, className, children, ...props }): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.white]: appearance === "white",
        [styles.green]: appearance === "green",
        [styles.red]: appearance === "red",
        [styles.hoverGreen]: hover === "green",
        [styles.hoverRed]: hover === "red",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
