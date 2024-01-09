import React from "react";
import { Button } from "../../ui/Button/Button";
import style from "./Footer.module.scss";

export const Footer = ({ removeAllTasks, removeCompletedTasks }) => {
  return (
    <footer className={style.footer}>
      <Button removeCompletedTasks={removeCompletedTasks} type="remove_done" />
      <Button removeAllTasks={removeAllTasks} type="remove_all" />
    </footer>
  );
};

// function renderFooter() {
//   if (toDoArr.length > 0) {
//     todoFooter.classList.remove("hidden");
//   } else {
//     todoFooter.classList.add("hidden");
//   }
// }
