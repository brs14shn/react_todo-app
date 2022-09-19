import React, { useState, useEffect } from "react";

const ModalsComp = ({ edited, modalTutorial }) => {
  const { id, todoItem: newTodo } = edited;
  const [todo, setTodo] = useState(newTodo);

  const handleSave = () => {
    modalTutorial();
   
    setTodo("");
  };

  useEffect(() => {
    setTodo(newTodo);
  }, [newTodo]);

  return (
    <div className="modal" tabIndex="-1" id="edit-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex gap-4 mb-4">
              <input
                type="text"
                name="add-todo"
                className="form-control shadow-none text-capitalize"
                placeholder="Enter new Task"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
              <button
                className="btn btn-warning px-3 fw-bold shadow-none"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalsComp;
