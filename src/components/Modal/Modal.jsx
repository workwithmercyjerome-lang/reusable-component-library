import { useState } from "react";
import "./Modal.css";

function Modal({ title = "Modal", children, triggerText = "Open Modal" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="modal-trigger" onClick={() => setIsOpen(true)}>
        {triggerText}
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <h3>{title}</h3>

              <button
                className="modal-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            <div className="modal-body">{children}</div>

            <div className="modal-footer">
              <button className="modal-cancel" onClick={() => setIsOpen(false)}>
                Cancel
              </button>

              <button
                className="modal-confirm"
                onClick={() => setIsOpen(false)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;