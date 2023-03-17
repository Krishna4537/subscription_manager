import "./Loader.css";

import React from "react";

const Loader = (props) => {
  console.log(props);
  return (
    <div
      className={`loader ${
        props.component === "Products" ? "loader_Products" : "loader_Login"
      }`}
    >
      Loader
    </div>
  );
};

export default Loader;
