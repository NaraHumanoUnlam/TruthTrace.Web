import React from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";

export const Search = (): JSX.Element => {
  return (
    <div className="box">
      <button className="search-menu"><FaSearch/></button>
  </div>
  );
};