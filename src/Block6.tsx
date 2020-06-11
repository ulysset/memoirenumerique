import React from "react";

const Block6 = () => {
  return (
    <div className="container flex flex-row justify-around space-x-2">
      <div className="w-1/4 max-h-screen relative space-y-1">
        <video
          className="w-full"
          src={process.env.PUBLIC_URL + "/videos/metal.mp4"}
          autoPlay
          loop
          muted
        />
        <p className="text-caption text-xs">Fig 4: Mémoire défaillante</p>
      </div>

      <video
        className="w-1/3 self-end"
        src={process.env.PUBLIC_URL + "/videos/digital-dark-age.mp4"}
        autoPlay
        loop
        muted
      />
      <p className="w-1/3" style={{ fontSize: ".6rem", maxWidth: "14rem" }}>
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
export default Block6;
