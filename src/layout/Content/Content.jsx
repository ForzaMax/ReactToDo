import React from "react";
import style from "./Content.module.scss";
import { Form } from "../../ui/Form/Form";
import { Input } from "../../ui/Input/Input";
import { Button } from "../../ui/Button/Button";
import { TaskList } from "../../components/TaskList/TaskList";
import { Footer } from "../../components/Footer/Footer";

export const Content = ({
  value,
  onChange,
  addTask,
  tasks,
  toggleTaskDone,
  removeAllTasks,
  removeCompletedTasks,
  removeTask,

}) => {
  return (
    <div className={style.content}>
      <>
        <Form>
          <Input value={value} onChange={onChange} />
          <Button type="primary" addTask={() => addTask(value)} />
        </Form>

        {tasks.length > 0 && (
          <TaskList
            tasks={tasks}
            toggleTaskDone={toggleTaskDone}
            removeTask={removeTask}

          />
        )}
      </>

      {tasks.length > 0 && (
        <Footer
          removeAllTasks={removeAllTasks}
          removeCompletedTasks={removeCompletedTasks}
        />
      )}
    </div>
  );
};
