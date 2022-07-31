import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import ModalsComp from "./ModalsComp";

const Todos = ({ todoItem, deleteTodo, id, editedTodo, modalTutorial }) => {
  const [edited, setEdited] = useState("");
  return (
    <div className="d-flex justify-content-between align-items-center my-2">
      <li className="list-group-item border-0 fs-5 text-capitalize">
        {todoItem}
      </li>
      <div className="p-0 m-0 d-flex gap-3">
        <button
          className="btn btn-success px-3"
          onClick={() => setEdited(id, todoItem)}
          data-bs-toggle="modal"
          data-bs-target="#edit-modal"
        >
          <FaEdit size={20} />
        </button>
        <button className="btn btn-danger px-3" onClick={() => deleteTodo(id)}>
          <AiFillDelete size={22} />
        </button>
      </div>
      <ModalsComp edited={edited} modalTutorial={modalTutorial} />
    </div>
  );
};

export default Todos;
