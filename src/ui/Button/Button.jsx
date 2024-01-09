import React from "react";
import style from "./Button.module.scss";

export const Button = ({
  addTask,
  type,
  removeAllTasks,
  removeCompletedTasks,
}) => {
  const typeOfButton = {
    primary: (
      <button onClick={addTask} className={style.btn__addtask}>
        Добавить
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
