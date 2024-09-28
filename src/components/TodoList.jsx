import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [doList, setDoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const inputRef = useRef();
  const add = () => {
    const text = inputRef.current.value.trim();
    if (text === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      todo: text,
      status: false,
    };
    setDoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setDoList((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setDoList((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(doList));
  }, [doList]);

  return (
    <div className="bg-white place-self-center w-9/12 max-w-md flex flex-col rounded-l p-7 min-h-[550px]">
      {/* --------TITLE--------- */}
      <div className="flex items-center mt-7 gap-2 ">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold"> To-Do List </h1>
      </div>
      {/* --------input box--------- */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add Your Task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      {/* --------todo list--------- */}
      <div>
        {doList.map((item, index) => {
          return (
            <TodoItem
              key={index}
              text={item.todo}
              id={item.id}
              status={item.status}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
