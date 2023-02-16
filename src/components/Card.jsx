import React from "react";

export default function Card({ handleStatus, title, description, status }) {
  return (
    <div>
      <button
        onClick={() => {
          handleStatus(title);
        }}
      >
        {!status ? "✅" : "😭"}
      </button>
      <label>{title}</label>
      <p>{description}</p>
    </div>
  );
}
