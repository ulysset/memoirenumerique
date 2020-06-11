import React from "react";

const Block3 = () => {
  return (
    <div className="container flex justify-between p-4">
      <div className="flex flex-col flex-1 items-center ">
        <video
          className="w-3/4"
          style={{ maxHeight: "90%" }}
          src={process.env.PUBLIC_URL + "/videos/fraag_1.mp4"}
          autoPlay
          loop
          controls
          muted
        />
        <p className="text-caption" style={{ fontSize: ".6rem" }}>
          Fig 1: Fragment immatériel, extrait de la courte nouvelle Funes ou la
          mémoire.
        </p>
      </div>
      <p className="w-1/4" style={{ fontSize: ".6rem", lineHeight: ".8rem" }}>
        La nouvelle de Jorge Luis Borges, Funès ou la mé- moire, présente un
        personnage incapable d’oublier quoi que ce soit, doté alors d’une
        mémoire infail- lible à la suite d’une chute à cheval, devenant alors
        hypermnésique, incapable de filtrer ou éteindre le flux continuel
        d’experiences et de souvenirs. Son existence, ses pensées, ses
        perceptions sont para- sitées en permanence par un jaillissement de sou-
        venirs d’une précision inutile. Il devient incapable de vivre avec une
        telle mémoire, qu’il compare à un tas d’ordures, et s’enferme dans une
        pièce vide pour ne plus rien enregistrer. Dans le monde surchargé de
        Funes, « il n’y avait que des détails, presque immédiats.» Ainsi, une
        façon de cristalliser la mémoire est la capacité à choisir, à
        hiérarchiser, à créer des catégories pour se donner une vue d’ensemble ;
        toutes choses que Funès est incapable de faire car il est en perma-
        nence assailli par le flot des informations que lui im- pose sa mémoire.
        On peut émettre l’hypothèse que la nouvelle de Borges, écrite dans les
        années 40, annonce certains dangers comme celui de la satu- ration
        mémorielle. Le flux continu, la disparition du prix du développement et
        l’extension des mémoires numériques nous poussent à immortaliser les dé-
        tails, mêmes les plus futiles de notre existence, et ne
        contribuent-t-ils pas à rendre à nous rendre am- nésique par
        l’hypermnésie? Que se passerait-il si, comme Funes, nous étions
        incapables d’oublier ?
      </p>
    </div>
  );
};

export default Block3;
