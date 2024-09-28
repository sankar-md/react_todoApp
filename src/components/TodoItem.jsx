import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import del from "../assets/delete.png";

const TodoItem = ({ text, id, status, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={status ? tick : not_tick} alt="" className="w-7 " />
        <p
          className={` ml-4 mb-1 text-[17px] decoration-redz-400 ${
            status ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        src={del}
        alt=""
        className="w-4 cursor-pointer "
      />
    </div>
  );
};

export default TodoItem;
