import React, { useContext } from "react";
import style from "./Input.module.scss";
import { TodosContext } from "../../app/providers/TodosContext/TodosProvider";

export const Input = () => {
  const { inputValue, inputHandler } = useContext(TodosContext);
  console.log(inputValue)
  
  return (
    <input
      value={inputValue}
      onChange={inputHandler}
      className={style.input}
      type="text"
      placeholder="Новая задача"
    ></input>
  );
};
