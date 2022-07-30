import React from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const Todos = () => {
  return (
    <div className="d-flex justify-content-between align-items-center my-2">
      <li className="list-group-item border-0 fs-5 text-capitalize">Todos</li>
      <div className="p-0 m-0 d-flex gap-3">
        <button className="btn btn-success px-3">
          <FaEdit size={20} />
        </button>
        <button className="btn btn-danger px-3">
          <AiFillDelete size={22} />
        </button>
      </div>
    </div>
  );
};

export default Todos;
