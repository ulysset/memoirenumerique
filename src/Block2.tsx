import React from "react";
const Block2 = () => {
  return (
    <div
      className="container text-4xl text-center flex flex-row justify-center items-center space-x-3 flex-wrap m-auto w-11/12"
      style={{ lineHeight: "2.5rem" }}
    >
      <span>Pourquoi</span>
      <span>vouloir</span>
      <span>stocker</span>
      <span>notre</span>
      <span>mémoire</span>
      <span>à</span>
      <span>l'</span>
      <span>infini</span>
      <span className="text-pixel">?</span>
      <span className="inline-block">
        <video
          className=" inline-block"
          style={{ width: "2ch" }}
          src={process.env.PUBLIC_URL + "/videos/frag6_1.mp4"}
          autoPlay
          loop
          controls
          muted
        />
      </span>
      <span>La</span>
      <span>technologie</span>
      <span>va-t-elle</span>
      <span>amener</span>
      <span>l'humain</span>
      <span>à</span>
      <span>fusionner</span>
      <span>avec</span>
      <span>la</span>
      <span>machine</span>
      <span className="text-pixel">?</span>

      <video
        className=" inline-block"
        style={{ width: "10ch" }}
        src={process.env.PUBLIC_URL + "/videos/hommefusionne.mp4"}
        autoPlay
        loop
        controls
        muted
      />
      <span>Qu'est</span>
      <span>ce</span>
      <span>que</span>
      <span>le</span>
      <span>digital</span>
      <span>dark</span>
      <span>age</span>
      <span className="text-pixel">?</span>
      <video
        className=" inline-block"
        style={{ width: "2ch" }}
        src={process.env.PUBLIC_URL + "/videos/drapmouvement.mp4"}
        autoPlay
        loop
        controls
        muted
      />
      <span>Pouvons-nous comparer mémoire biologique et mémoire numérique</span>
      <span className="text-pixel">?</span>
      <span>Il y a t il un appauvrissement du souvenir</span>
      <span className="text-pixel">?</span>
    </div>
  );
};

export default Block2;
