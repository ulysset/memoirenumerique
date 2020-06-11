import React from "react";

const Block7 = () => {
  return (
    <div className="container">
      <video
        className="w-10/12 m-auto"
        src={process.env.PUBLIC_URL + "/videos/sav_1.mp4"}
        autoPlay
        loop
        muted
      />
    </div>
  );
};
export default Block7;
