import React, { useContext } from "react";
import style from "./Button.module.scss";

export const Button = ({ type, onClick, children }) => {

  const typeOfButton = {
    primary: (
      <button onClick={onClick} className={style.btn__addtask}>
        {children}
      </button>
    ),
    remove_done: (
      <button onClick={onClick} className={style.btn__removedone}>
        {children}
      </button>
    ),
    remove_all: (
      <button onClick={onClick} className={style.btn__removeall}>
        {children}
      </button>
    ),
  };

  return typeOfButton[type];
};
