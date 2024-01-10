import { createContext, useState, useEffect } from "react";

export const TodosContext = createContext(null);

export const TodosProvider = ({ children }) => {
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

  // Добавление таски
  function addTask(inputValue) {
    if (inputValue.length) {
      const newTask = {
        text: inputValue,
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

  const contextValue = {
    tasks,
    inputValue,
    inputHandler,
    addTask,
    toggleTaskDone,
    removeAllTasks,
    removeCompletedTasks,
    removeTask,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};
