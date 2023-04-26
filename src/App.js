import { useState } from "react";
import TodoInputContainer from "./components/TodoInputContainer";
import TodoOutputContainer from "./components/TodoOutputContainer";

import "./styles.css";

export default function App() {
  const [inputVal, setInputVal] = useState("");
  const [todo, setTodo] = useState([]);

  const handleClick = () => {
    if (inputVal !== "") {
      let id = todo.length + 1;
      const dataObj = {
        id: id,
        data: inputVal,
        isCompleted: false
      };

      setInputVal("");
      return setTodo((prev) => [...prev, dataObj]);
    } else {
      alert("Enter any todo!");
    }

    return setTodo((prev) => [...prev]);
  };
  const handleDelete = (id) => {
    const filterData = todo.filter((item) => item.id !== id);
    setTodo(filterData);
  };

  const handleComplete = (id) => {
    const finalData = todo.map((element) => {
      if (element.id === id) {
        return { ...element, isCompleted: !element.isCompleted };
      } else {
        return element;
      }
    });
    setTodo(finalData);
  };

  // console.log(todo);
  return (
    <div className="App">
      <TodoInputContainer
        inputVal={inputVal}
        setInputVal={setInputVal}
        handleClick={handleClick}
      />
      <TodoOutputContainer
        list={todo}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
    </div>
  );
}
