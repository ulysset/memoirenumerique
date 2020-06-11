import React from "react";
import "./styles/main.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Block1 from "./Block1";
import Block2 from "./Block2";

function App() {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
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
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default App;
