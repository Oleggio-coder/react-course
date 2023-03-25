//import React from "react";
import styles from "./Button.module.scss";

interface Props {
  children: string;
  //color?: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

//className={"btn btn-" + color}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
