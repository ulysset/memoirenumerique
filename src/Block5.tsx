import React from "react";

const Block5 = () => {
  return (
    <div className="container">
      <video
        className="w-11/12 max-h-screen"
        src={process.env.PUBLIC_URL + "/videos/drapeaumouvement.mp4"}
        autoPlay
        loop
        muted
      />
    </div>
  );
};
export default Block5;
