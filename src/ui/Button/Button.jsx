import React, { useContext } from "react";
import style from "./Button.module.scss";
import { TodosContext } from "../../app/providers/TodosContext/TodosProvider";

export const Button = ({ type }) => {
  const { addTask, removeAllTasks, removeCompletedTasks, inputValue } =
    useContext(TodosContext);

  const typeOfButton = {
    primary: (
      <button
        onClick={() => addTask(inputValue)}
        className={style.btn__addtask}
      >
        Добавитья
      </button>
    ),
    remove_done: (
      <button onClick={removeCompletedTasks} className={style.btn__removedone}>
        Удалить завершенные
      </button>
    ),
    remove_all: (
      <button onClick={removeAllTasks} className={style.btn__removeall}>
        Удалить все
      </button>
    ),
  };

  return typeOfButton[type];
};
