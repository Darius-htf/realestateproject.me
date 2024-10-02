import React, { useState } from "react";

function FormAlert({
  FirstName,
  LastName,
  Email,
  PhoneNumber,
  Message,
  onClose,
}) {
  return (
    <div className="fixed top-0">
      <div
        className="FORM__ALERT mb-4 flex rounded-lg bg-secondary p-4 text-start text-sm shadow-lg"
        role="alert"
      >
        <svg
          className="me-3 mt-[2px] inline h-4 w-4 flex-shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Form Info</span>
        <div>
          <span className="font-medium">This is the form's data...</span>
          <ul className="FORM__INPUTS">
            <li>FirstName: {FirstName}</li>
            <li>LastName: {LastName}</li>
            <li>Email: {Email}</li>
            <li>PhoneNumber: {PhoneNumber}</li>
            <li>Message: {Message}</li>
          </ul>
        </div>
        <button
          type="button"
          className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary p-1.5 text-accent hover:bg-card focus:ring-2 focus:ring-accent"
          aria-label="Close"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <svg
            className="h-3 w-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default FormAlert;
