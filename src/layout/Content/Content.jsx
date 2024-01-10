import React, { useContext } from "react";
import style from "./Content.module.scss";
import { Form } from "../../ui/Form/Form";
import { Input } from "../../ui/Input/Input";
import { Button } from "../../ui/Button/Button";
import { TaskList } from "../../components/TaskList/TaskList";
import { Footer } from "../../components/Footer/Footer";
import { TodosContext } from "../../app/providers/TodosContext/TodosProvider";

export const Content = () => {
  const { tasks } = useContext(TodosContext);

  return (
    <div className={style.content}>
      <>
        <Form>
          <Input />
          <Button type="primary" />
        </Form>

        {tasks.length > 0 && <TaskList />}
      </>

      {tasks.length > 0 && <Footer />}
    </div>
  );
};
