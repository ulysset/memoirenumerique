import React from "react";

const Block1 = () => {
  return (
    <div className="bg-grey1 h-full w-full flex flex-col justify-between text-lg">
      <div className="flex justify-between  p-3">
        <div className="text-center">
          Mars 19-27, 2020 <br />
          BNF Paris
        </div>
        <div className="text-center">Mnesis, et le futur</div>
        <div className="text-center">
          Avril 02-14, 2020
          <br />
          KB Amsterdam
        </div>
      </div>
      <video
        className="w-3/6 m-auto"
        style={{ maxHeight: "70vh" }}
        src={process.env.PUBLIC_URL + "/videos/recherches-mouvement.mp4"}
        autoPlay
        loop
        muted
      />
      <div className="flex justify-between p-3">
        <div className="text-center">
          Mars 03-15, 2020
          <br />
          BE Berlin
        </div>
        <div className="text-center">
          Avril 16-26, 2020 <br />
          BN Oslo
        </div>
      </div>
    </div>
  );
};
export default Block1;
