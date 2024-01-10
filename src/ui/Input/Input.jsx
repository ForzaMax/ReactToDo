import React, { useContext } from "react";
import style from "./Input.module.scss";

export const Input = ({ onChange, inputValue }) => {
  return (
    <input
      value={inputValue}
      onChange={onChange}
      className={style.input}
      type="text"
      placeholder="Новая задача"
    ></input>
  );
};
