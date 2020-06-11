import React from "react";

const Block3 = () => {
  return (
    <div className="flex justify-between p-4">
      <div className="flex flex-col flex-1 items-center ">
        <video
          className="w-3/4"
          style={{ maxHeight: "90%" }}
          src={process.env.PUBLIC_URL + "/videos/fraag_1.mp4"}
          autoPlay
          loop
          muted
        />
        <p style={{ fontSize: ".5rem" }}>
          Fig 1: Fragment immatériel, extrait de la courte nouvelle Funes ou la
          mémoire.
        </p>
      </div>
      <p className="w-1/4" style={{ fontSize: ".6rem", lineHeight: ".8rem" }}>
        Pala consult ortemque atquerudem patquemor ut L. Se- ritinatu viu que
        publi etimillarit. Bit. Habefen diisquem pat, me clatum, num cupio,
        spio, noxi- mantium se ex nonsulos nihilin suleris, quondi iam int. Udem
        ni- mulis, quem, Catuspio essilinat, contre alem actum hordi is con
        interecrid sendam parita, et? Qua no. Perratiae conihicid prisse pro-
        rus. Cus hem ingulto rteatiquo inatu qui iam auterra equium des et
        virmissil ur que maionul ha- larei pos hoccio curs inpravenit, Ti. To
        consum, con hocchus aus et rei ca non anum uribunt L. C. Mulaberis
        bonterisquo hor ut ad Catquodi cla que tesus fachum menericam dius int.
        Sentiu sed ciam. Quos publinceste fautus- quem interistim etia nored mo
        tampontem opopublic re tem si- manum labente moere, num ex nicepsente
        atus rei publicae notis losturbis. Actem, clemplin tenti simususu
        inicaediis? notio Catilina, mum ia cotius. Efecons ultorsulicae acer-
        tem iam mur, que rebatemei cae condientis faudeti lientim ularit. Otis
        red mante patieris. Tumussilis alius inatien atiderum et? hucerce
        rficiae autus es viuror pri terum it, nihiniceps, senium ne pero,
        nertertus? in Etrarte ta rebunum sa nocret inum quonvo- liciae res?
        Lostra rem dionsul oculles vitea renis, Cuppl. M. Nam re cupimus,
        ublinteret vit.
      </p>
    </div>
  );
};

export default Block3;
