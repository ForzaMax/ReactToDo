import React, { useContext } from "react";
import style from "./Content.module.scss";
import { Form } from "../../ui/Form/Form";
import { Input } from "../../ui/Input/Input";
import { Button } from "../../ui/Button/Button";
import { TaskList } from "../../components/TaskList/TaskList";
import { Footer } from "../../components/Footer/Footer";
import { TodosContext } from "../../app/providers/TodosContext/TodosProvider";
import { useState } from "react";

export const Content = () => {
  const { tasks, setTasks } = useContext(TodosContext);

  const [inputValue, setValue] = useState("");

  function inputHandler(e) {
    setValue(e.target.value);
  }

  function addTask(inputValue) {
    if (inputValue.trim().length) {
      const newTask = {
        text: inputValue.trim(),
        done: false,
        id: Date.now(),
      };
      setTasks([...tasks, newTask]);
      setValue("");
    } else setValue("");
  }

  return (
    <div className={style.content}>
      <>
        <Form>
          <Input onChange={inputHandler} inputValue={inputValue} />
          <Button onClick={() => addTask(inputValue)} type="primary">
            {" "}
            Добавить
          </Button>
        </Form>

        {tasks.length > 0 && <TaskList />}
      </>

      {tasks.length > 0 && <Footer />}
    </div>
  );
};
