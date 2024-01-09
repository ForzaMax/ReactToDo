import React from "react";
import style from "./Input.module.scss";

export const Input = ({ value, onChange }) => {

  return (
    <input
      value={value}
      onChange={onChange}
      className={style.input}
      type="text"
      placeholder="Новая задача"
    ></input>
  );
};
