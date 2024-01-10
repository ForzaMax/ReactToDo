import React from "react";
import { Button } from "../../ui/Button/Button";
import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Button type="remove_done" />
      <Button type="remove_all" />
    </footer>
  );
};

