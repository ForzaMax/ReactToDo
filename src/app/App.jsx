import { Content } from "../layout/Content/Content";
import { useEffect, useState } from "react";
import "./Global.css";

function App() {
  // Массив с данными тудушек
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(process.env.REACT_APP_LS_TODO_KEY);
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // При любом измении массива идёт запись в LocalStorage
  useEffect(() => {
    localStorage.setItem(
      process.env.REACT_APP_LS_TODO_KEY,
      JSON.stringify(tasks)
    );
  }, [tasks]);

  // Контроль инпута
  const [inputValue, setValue] = useState("");
  function inputHandler(e) {
    setValue(e.target.value);
  }

  console.log(inputValue);

  // Добавление таски
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

  // Удаление ВСЕХ задач
  function removeAllTasks() {
    setTasks([]);
  }

  // Удаление ВСЕХ завершенных задач
  function removeCompletedTasks() {
    setTasks(tasks.filter((task) => !task.done));
  }

  // Контроль чекбокса
  function toggleTaskDone(id) {
    setTasks(
      tasks.map((task) => {
        console.log(task.id);
        console.log(id);
        if (task.id === id) {
          console.log(task.done);
          return { ...task, done: !task.done };
        }
        console.log(task.done);
        return task;
      })
    );
  }

  // Удаление конкретной задачи
  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Редактирование задачи
  // const [isEdit, setIsEdit] = useState(false);

  // function editTask(id) {
  //   setIsEdit(!isEdit);
  // }


  console.log(tasks);

  return (
    <>
      <h1 className="title">ToDo List</h1>
      <Content
        tasks={tasks}
        value={inputValue}
        onChange={inputHandler}
        addTask={addTask}
        toggleTaskDone={toggleTaskDone}
        removeAllTasks={removeAllTasks}
        removeCompletedTasks={removeCompletedTasks}
        removeTask={removeTask}
      />
    </>
  );
}

export default App;
