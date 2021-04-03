import React from "react";
import "./styles/main.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Block1 from "./Block1";
import Block2 from "./Block2";
import Block3 from "./Block3";
import Block4 from "./Block4";
import Block5 from "./Block5";
import Block6 from "./Block6";
import Block7 from "./Block7";
import Block8 from "./Block8";

function App() {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"65k8TJN%c7"}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Block1 />
            </div>
            <div className="section">
              <Block2 />
            </div>
            <div className="section">
              <Block3 />
            </div>
            <div className="section">
              <Block4 />
            </div>
            <div className="section">
              <Block5 />
            </div>
            <div className="section">
              <Block6 />
            </div>
            <div className="section">
              <Block7 />
            </div>
            <div className="section">
              <Block8 />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default App;
