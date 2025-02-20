import React from "react";

function DialogPlanning({ id, children }) {
  return (
    <dialog
      id={`${id}`}
      className="modal"
      onClick={(e) => e.stopPropagation()} // Prevent the dialog from closing when clicked inside
    >
      <div className="modal-box  bg-white border border-blue-700 ">
        {children}
        <div className="modal-action">
          <button
            className="btn"
            onClick={() => document.getElementById(`${id}`).close()}
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default DialogPlanning;
