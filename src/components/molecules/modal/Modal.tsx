import React, { useState } from "react";

import Button from "../../atoms/button/Button";

interface Props {
  isOpen: boolean;
  deleteCraftHandler: () => void;
  handleClose: () => void;
}

const Modal = ({ isOpen, deleteCraftHandler, handleClose }: Props) => {
  return (
    <div>
      {isOpen && (
        <div className="modal-top-wrapper">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 z-50 bg-gray-500 opacity-75"></div>
          </div>
          <div className="modal-wrapper">
            <div>
              <div className="mt-3 ml-4 text-left">
                <h3 className="text-lg font-medium leading-6 text-primary-text-800">
                  Confirm Delete
                </h3>
              </div>
            </div>
            <div className=" mt-10 ml-4 py-3 flex md:justify-end sm:px-6">
              <span className="flex gap-x-4 rounded-md w-auto">
                <Button title="Confirm" onClick={deleteCraftHandler} />
                <p onClick={handleClose} className="modal-close-button">
                  Close
                </p>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
