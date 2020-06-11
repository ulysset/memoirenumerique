import React from "react";

const Block4 = () => {
  return (
    <div className="container">
      <div className="grid grid-rows-6 grid-cols-3 gap-2 w-11/12 m-auto">
        <video
          className="row-span-5"
          src={process.env.PUBLIC_URL + "/videos/R21.mp4"}
          autoPlay
          loop
          muted
        />
        <video
          className="row-span-5"
          src={process.env.PUBLIC_URL + "/videos/R22.mp4"}
          autoPlay
          loop
          muted
        />
        <video
          className="row-span-5"
          src={process.env.PUBLIC_URL + "/videos/R22_1.mp4"}
          autoPlay
          loop
          muted
        />
        <p className="col-span-3 text-xs text-caption">
          Fig 2: Mapping, extrait de la courte nouvelle Funes ou la mémoire.
        </p>
      </div>
    </div>
  );
};

export default Block4;
