import React from "react";
import style from "./TaskList.module.scss";
import { TaskItem } from "../../ui/TaskItem/TaskItem";

export const TaskList = ({ tasks, toggleTaskDone, removeTask }) => {
  return (
    <ul className={style.task__list}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          text={task.text}
          done={task.done}
          id={task.id}
          toggleTaskDone={toggleTaskDone}
          removeTask={removeTask}

        />
      ))}
    </ul>
  );
};
