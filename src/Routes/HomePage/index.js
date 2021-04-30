import React from "react";
import Main from "./Components/Main/index.js";
import { useLocation } from "react-router-dom";
// import Bars from "../../Components/Bars.js";

const HomePage = () => {
  console.log(localStorage.getItem("jwt"));
  let location = useLocation();
  
  let selectedCategory = location.state
    ? location.state.selectedCategory
    : "All";
  
  let searchValue = location.state ? location.state.searchValue : "";

  return (
    <div>
      {/* <div
        style={{
          position: "fixed",
          minWidth: "1294px",
          overflowX: "auto",
          top: "0",
          width: "100%",
          zIndex: "1000",
        }}
      > */}
      {/* <Bars /> */}
      {/* </div> */}
      <Main
        selectedCategory={selectedCategory}
        searchValue={searchValue}
      />
    </div>
  );
};

export default HomePage;
