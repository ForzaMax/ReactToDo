import React, { useContext } from "react";
import { Button } from "../../ui/Button/Button";
import style from "./Footer.module.scss";
import { TodosContext } from "../../app/providers/TodosContext/TodosProvider";

export const Footer = () => {
  const { removeAllTasks, removeCompletedTasks } = useContext(TodosContext);

  return (
    <footer className={style.footer}>
      <Button onClick={removeCompletedTasks} type="remove_done">
        {" "}
        Удалить завершенные
      </Button>
      <Button onClick={removeAllTasks} type="remove_all">
        Удалить все
      </Button>
    </footer>
  );
};
