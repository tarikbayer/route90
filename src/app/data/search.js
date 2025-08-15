"use client";
import React from "react";

const element = (
  <form>
    <label htmlFor="search-input">Search:</label>
    <input id="search-input" />
    <button aria-label="Submit" className="submit-btn">
      <img
        alt=""
        src="https://sandpack-bundler.vercel.app/img/arrow-right.svg"
      />
    </button>
  </form>
);

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(element);
