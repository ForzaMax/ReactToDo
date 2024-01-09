import React from "react";
import style from "./TaskItem.module.scss";

export const TaskItem = ({ text, done, id, toggleTaskDone, removeTask }) => {
  
  
  
  
  return (
    <li className={style.task__item}>
      <label className={style.task__label}>
        <input
          onChange={() => toggleTaskDone(id)}
          type="checkbox"
          className={style.task__checkbox}
          checked={done}
        />
        <span className={style.task__text}>{text}</span>
      </label>

      <button  className={style.task__btn_edit}>✏️</button>
      <button onClick={() => removeTask(id)} className={style.task__btn_delete}>
        ❌
      </button>
    </li>
  );
};
