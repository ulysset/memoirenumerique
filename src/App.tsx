import React from "react";
import "./styles/main.css";
import ReactFullpage from "@fullpage/react-fullpage";

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
              <p>Section 1 (welcome to fullpage.js)</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div className="section">
              <p>Section 2</p>
            </div>
            <div className="section">
              <div className="text-center">
                <header className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-4xl text-white">
                  <p>Mémoire numérique?</p>
                </header>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default App;
