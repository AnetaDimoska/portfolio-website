"use client";

import { useTheme } from "@/context/theme-context";

export default function IntroIllustration() {
  const { theme } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="802.61127"
      height="507.21869"
      viewBox="0 0 802.61127 507.21869"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className=" w-full absolute bottom-0 md:right-[-150px] lg:right-[-230px] xxl:static"
      // className=" w-full  md:absolute md:bottom-0 md:right-[0] md:h-[280px] sm:w-[500px] lg:h-[300px] xl:w-[600px] xl:h-[400px] 2xl:w-auto 2-xl:h-[initial]"

    >
      <g transform="scale(-1, 1) translate(-802.61127, 0)">
        {/*  ------------------ LEFT LEAF ON THE FLOOR */}
        <path
          d="M706.75598,463.86943l.78168-17.57605c8.14874-4.35571,17.23755-6.65643,26.47723-6.70239-12.71655,10.39673-11.12738,30.43799-19.7489,44.41913-5.51459,8.79132-14.72815,14.59741-25.03845,15.77863l-10.64166,6.51556c-2.9552-16.47455,1.45166-33.41699,12.05951-46.36371,2.97607-3.55969,6.38861-6.73047,10.15698-9.4375,2.54865,6.7204,5.95361,13.36633,5.95361,13.36633Z"
           fill={theme === 'light' ? "#c5f1e4" : "#80b3a3"}
          className="animate-wing"
        />
        {/*  ------------------ RIGHT LEAF ON THE FLOOR */}
        <path
          d="M168.80524,444.60912l-25.68042-7.77502c-3.36798-13.68317-3.34491-27.98163,.0672-41.65381,10.57529,22.70898,40.79196,27.90875,58.20682,45.91602,10.91522,11.46094,16.02567,27.26398,13.888,42.94598l5.621,18.18085c-25.46002-1.83765-48.83868-14.73151-63.97668-35.28461-4.13983-5.73895-7.5405-11.97638-10.12173-18.56506,10.89169-1.23547,21.99582-3.76434,21.99582-3.76434Z"
          fill={theme === 'light' ? "#c5f1e4" : "#80b3a3"}
          className="animate-wing"
        />

        {/*  ------------------ DESK------------ */}
        <path
          d="M617.77271,503.43022c-.00372,.53223-.21545,1.04187-.59003,1.41998-.37421,.37305-.88159,.58179-1.40997,.58002h-8.03998c-1.10077,.00378-1.99622-.88544-2-1.98621v-243.15381c0-5.35999-1.79999-9.70999-4.01001-9.72H101.23273c-2.22,.00995-4.01001,4.35999-4.01999,9.72v241.64996c-.00342,1.02948-.78546,1.88928-1.81,1.98999-1.62,.15997-3.23999,.29999-4.85001,.42999-.04001,0-.07999,.01001-.12,.01001-.88,.08002-1.76001,.14001-2.64001,.21002h-.01001c-.45999-.83002-.89999-1.67999-1.35001-2.53003-.14426-.28882-.21954-.60718-.22-.92999V247.68016c0-1.48001,.06-2.97,.16-4.44,.14267-2.01859,.39304-4.02811,.75-6.01999,1.69-9.29001,5.51001-15.57999,9.85001-15.60001h509c.63342,.00421,1.2594,.1369,1.84003,.39001,.85284,.37741,1.6239,.91748,2.27002,1.59,.87708,.9118,1.62714,1.93771,2.22998,3.04999,2.13995,3.76999,3.66998,9.39001,4.21002,15.92999,0,.06,.01001,.12,.01001,.17999,.14001,1.62,.21002,3.26999,.20001,4.92001l.14001,21.42999,.09003,12.78,.27002,40.10001,.09998,14.23999,.43988,167.20007Z"
          fill="#e6e6e6"
          className=" hidden-before-animation animate-slideDeskFromTop "
        />

        {/* -------------------- COMPUTER ---------------- */}

        <g className="hidden-before-animation animate-slideComputerFromTop">
          <path
            d="M432.02362,147.48647h-51.00562c-1.50256,.00226-2.71893,1.2218-2.71735,2.72433v80.57382h56.44727v-80.57385c.00079-1.50381-1.21765-2.72351-2.7215-2.7243h-.00281Zm-25.33118,45.78107c-3.31995-.01547-6.00745-2.70294-6.02295-6.02289v-9.29349c0-3.32635,2.69653-6.02292,6.02289-6.02292s6.02295,2.69656,6.02295,6.02292v9.29349c-.01544,3.31995-2.70294,6.00745-6.02289,6.02289Z"
            fill="#ccc"
          />
          <path
            d="M378.12561,228.20735v7.77377c.00171,.83862,.68115,1.51804,1.51978,1.51971h53.75793c.83759-.00421,1.5155-.68216,1.51971-1.51971v-7.77377h-56.79742Z"
            fill="#3f3d56"
          />
          <path
            d="M516.48425,21.74191h-218.02899c-3.90009,.00621-7.06018,3.16629-7.06641,7.06638V175.9352c.00375,3.90112,3.16528,7.06265,7.06641,7.06638h218.02899c3.90112-.00372,7.06268-3.16525,7.06641-7.06638V28.8083c-.00623-3.90009-3.16632-7.06018-7.06641-7.06639Z"
            fill="#e6e6e6"
          />
          <path
            d="M514.66437,26.84586h-214.38751c-2.08835,.00453-3.77893,1.69865-3.77911,3.787V174.11305c.00357,2.08566,1.69345,3.77554,3.77911,3.77911h214.38751c2.08563-.00357,3.77551-1.69345,3.77911-3.77911V30.63283c-.00018-2.08833-1.6908-3.78244-3.77911-3.78697Z"
            fill="#fff"
          />

          <path
            d="M472.90534,240.20592h-127.54889c-1.29584,0-2.34631-1.05051-2.34631-2.34634,0-.16241,.01685-.32437,.05029-.48331l1.97913-9.39972c.23206-1.08347,1.18762-1.85889,2.29565-1.86292h123.59131c1.10803,.00403,2.0636,.77945,2.29565,1.86292l1.97919,9.39972c.26691,1.26807-.54468,2.51242-1.81268,2.77933-.15894,.03345-.32092,.05032-.48334,.05032Z"
            fill="#ccc"
          />
          <rect
            x="348.24092"
            y="227.80618"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="356.0977"
            y="227.80618"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="363.95445"
            y="227.80618"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="371.81123"
            y="227.80618"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="379.66799"
            y="227.80618"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="387.52477"
            y="227.80618"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="395.38152"
            y="227.80618"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="403.23827"
            y="227.80618"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="411.09505"
            y="227.80618"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="418.9518"
            y="227.80618"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="426.80858"
            y="227.80618"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="434.66533"
            y="227.80618"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="442.52211"
            y="227.80618"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="450.37886"
            y="227.80618"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="458.23564"
            y="227.80618"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="466.09239"
            y="227.80618"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="348.14809"
            y="231.73457"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="356.00487"
            y="231.73457"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="363.86162"
            y="231.73457"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="371.71837"
            y="231.73457"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="379.57515"
            y="231.73457"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="387.4319"
            y="231.73457"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="395.28868"
            y="231.73457"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="403.14543"
            y="231.73457"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="411.00221"
            y="231.73457"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="418.85896"
            y="231.73457"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="426.71575"
            y="231.73457"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="434.5725"
            y="231.73457"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="442.42925"
            y="231.73457"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="450.28603"
            y="231.73457"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="458.14278"
            y="231.73457"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="465.99956"
            y="231.73457"
            width="3.92838"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />
          <rect
            x="385.86055"
            y="236.44862"
            width="31.42706"
            height="2.35703"
            rx=".48819"
            ry=".48819"
            fill="#e6e6e6"
          />

          <path
            d="M503.88745,46.61423h-200.60153c-.44058-.00969-.78989-.37471-.78018-.81528,.00937-.42694,.35324-.77081,.78018-.7802h200.60153c.44055,.00969,.78986,.37471,.78021,.81528-.0094,.42694-.35327,.77081-.78021,.7802Z"
            fill="#cacaca"
          />
          <ellipse
            cx="316.94112"
            cy="36.16639"
            rx="4.67511"
            ry="4.7793"
            fill="#ccc"
          />
          <ellipse
            cx="333.09151"
            cy="36.16639"
            rx="4.67511"
            ry="4.7793"
            fill="#ccc"
          />
          <ellipse
            cx="349.2419"
            cy="36.16639"
            rx="4.67511"
            ry="4.7793"
            fill="#ccc"
          />

          <path
            d="M449.97424,147.99998h-85.95312c-7.46533-.00833-13.51508-6.05811-13.52338-13.52344v-56.95309c.0083-7.46533,6.05811-13.51514,13.52344-13.52344h85.95312c7.46533,.0083,13.51514,6.05811,13.52344,13.52344v56.95309c-.0083,7.46536-6.05811,13.51517-13.5235,13.52344Zm-85.95312-82c-6.36121,.00726-11.51617,5.16226-11.52338,11.52347v56.95309c.0072,6.36124,5.16223,11.5162,11.52344,11.52344h85.95312c6.36121-.00723,11.51624-5.1622,11.52344-11.52344v-56.95309c-.0072-6.36124-5.16223-11.5162-11.52344-11.52344l-85.95319-.00003Z"
            fill="#e6e6e6"
          />
          <rect
            x="366.49767"
            y="82"
            width="22.99121"
            height="2"
            fill="#e6e6e6"
          />
          {/* <rect x="366.49767" y="90" width="51" height="2" fill="#e6e6e6" />
          <rect x="366.49767" y="97" width="51" height="2" fill="#e6e6e6" />
          <rect x="366.49767" y="104" width="65" height="2" fill="#e6e6e6" />
          <rect x="366.49767" y="111" width="34" height="2" fill="#e6e6e6" />
          <rect x="366.49767" y="118" width="62" height="2" fill="#e6e6e6" />
          <rect x="366.49767" y="125" width="11" height="2" fill="#e6e6e6" /> */}

          <path
            d="M480.95765,33.5449h-3.96744c-.45247,0-.81892,.36645-.81892,.81892v3.97119c0,.45247,.36645,.81892,.81892,.81892h3.96744c.45247,0,.82266-.36645,.82266-.81892v-3.97119c0-.45247-.37019-.81892-.82266-.81892Z"
            fill="#ccc"
          />
          <path
            d="M471.23534,33.5449h-3.96744c-.45247,0-.81892,.36645-.81892,.81892v3.97119c0,.45247,.36645,.81892,.81892,.81892h3.96744c.45247,0,.82266-.36645,.82266-.81892v-3.97119c0-.45247-.37019-.81892-.82266-.81892Z"
            fill="#ccc"
          />
          <path
            d="M490.11906,33.73186h-3.96744c-.45247,0-.81892,.36645-.81892,.81892v3.97119c0,.45247,.36645,.81892,.81892,.81892h3.96744c.45247,0,.82266-.36645,.82266-.81892v-3.97119c0-.45247-.37019-.81892-.82266-.81892Z"
            fill="#ccc"
          />
          <path
            d="M430.31875,35.24255h-31.71342c-.55344,0-.99842,.44873-.99842,.99842s.44498,.9984,.99842,.9984h31.71342c.54967,0,.9984-.44873,.9984-.9984s-.44873-.99842-.9984-.99842Z"
            fill="#ccc"
          />
        </g>

        <g className=" hidden-before-animation animate-pop">
          <polygon
            points="403.38118 58.71 402.73317 56.817 485.59117 13.765 486.23818 15.658 403.38118 58.71"
            fill="#3f3d56"
          />
          <polygon
            points="600.00618 118.465 551.43117 38.719 552.9662 37.436 601.54018 117.182 600.00618 118.465"
            fill="#3f3d56"
          />
        </g>
        <g className="hidden-before-animation animate-popDelayOne">
          <polygon
            points="557.5912 148.423 474.73317 105.371 475.38118 103.478 558.23818 146.53 557.5912 148.423"
            fill="#3f3d56"
          />
        </g>

        <g className="hidden-before-animation animate-popDelayTwo">
          <polygon
            points="653.38118 138.452 652.73317 136.55901 702.5912 93.725 703.23818 95.617 653.38118 138.452"
            fill="#3f3d56"
          />
          <polygon
            points="703.9142 156.55299 656.60719 156.336 656.60719 154.336 703.9142 154.55299 703.9142 156.55299"
            fill="#3f3d56"
          />
        </g>

        <g className="hidden-before-animation animate-popDelayThree">
          <polygon
            points="637.9142 14.554 590.60719 14.336 590.60719 12.336 637.9142 12.554 637.9142 14.554"
            fill="#3f3d56"
          />
        </g>

        <path
          d="M562.61127,26h-53c-7.17969,0-13-5.8203-13-13s5.82031-13,13-13h53c7.17969,0,13,5.8203,13,13s-5.82031,13-13,13Z"
          fill="#6c63ff"
          className="hidden-before-animation animate-slideCardsFromTop"
        />

        <path
          d="M634.61127,159.99998h-53c-7.17969,0-13-5.82031-13-13s5.82031-13,13-13h53c7.17969,0,13,5.82031,13,13s-5.82031,13-13,13Z"
          fill="#6c63ff"
          className="hidden-before-animation animate-slideCardsFromTop"
        />
        <path
          d="M789.61127,168.95949h-53c-7.17969,0-13-5.82031-13-13s5.82031-13,13-13h53c7.17969,0,13,5.82031,13,13s-5.82031,13-13,13Z"
          fill="#6c63ff"
          className="hidden-before-animation animate-slideCardsFromTop"
        />
        <path
          d="M789.61127,102.95949h-53c-7.17969,0-13-5.82031-13-13s5.82031-13,13-13h53c7.17969,0,13,5.82031,13,13s-5.82031,13-13,13Z"
          fill="#6c63ff"
          className="hidden-before-animation animate-slideCardsFromTop"
        />
        <path
          d="M723.61127,26.95947h-53c-7.17969,0-13-5.8203-13-13s5.82031-13,13-13h53c7.17969,0,13,5.8203,13,13s-5.82031,13-13,13h0Z"
          fill="#6c63ff"
          className="hidden-before-animation animate-slideCardsFromTop"
        />

        {/* ---------------------------------GROUP CHAIR + GIRL --------------------- */}
        {/* --------------------------------- CHAIR START --------------------- */}
        <g className="hidden-before-animation animate-slideInFromRightDelayed">
          <path
            d="M309.28272,249.18022h-60c-4.41827,0-8,3.58173-8,8s3.58173,8,8,8h22v62h16v-62h22c4.41827,0,8-3.58173,8-8s-3.58173-8-8-8Z"
            fill="#3f3d56"
          />
          <path
            d="M348.88379,361.51714H188.40088c-32.1586-.11755-59.36639-23.80048-63.9165-55.63574l-5.68066-20.89566c-11.7579-43.30032-29.66748-84.68973-53.18134-122.90314-10.74733-17.45377-16.27895-34.34885-3.71484-50.61526,.10696-.13852,.21219-.27509,.31561-.4097,10.07715-13.11621,60.23438-15.95557,76.58545-16.50781,.646-.022,1.29443-.0329,1.94531-.03271h99.81885c.65137,0,1.29965,.01093,1.94482,.03271,17.95825,.5235,34.17963,10.86279,42.23633,26.9209,8.59686,16.39478,7.5,36.18546-2.85599,51.52979-35.06348,52.6709-45.79883,85.69727-34.80811,107.08499,10.63135,20.6875,43.22021,31.26465,102.55862,33.28516,15.94629,.543,23.26465,12.96002,23.31592,24.2666,.0498,11.01465-6.98633,23.17578-22.55273,23.84766-.50586,.02148-1.01514,.03223-1.52783,.03223Z"
            fill="#3f3d56"
          />

          <path
            d="M215.66342,504.01701h60c4.41827,0,8-3.58173,8-8s-3.58173-8-8-8h-22v-135h-16v135h-22c-4.41827,0-8,3.58173-8,8s3.58173,8,8,8Z"
            fill="#3f3d56"
          />
          {/* ----------------------------------------- GIRL STARTS ---------------------- */}
          <polygon
            points="269.96919 449.59201 280.30519 455.20599 307.66719 417.375 292.41118 409.08801 269.96919 449.59201"
            fill="#dda1aa"
          />
          <path
            d="M274.94449,436.11107l18.76401,5.87567-2.9866,7.86102,12.86682,18.67468c1.64624,2.38867,1.0444,5.65961-1.34424,7.30585-1.4213,.97955-3.23309,1.1983-4.84665,.58514l-21.84387-8.29901-.81094-9.20624-4.42429,7.21729-8.23599-3.12903,12.86176-26.88538Z"
            fill="#2f2e41"
          />
          <path
            d="M296.0845,68.07558c.92584,6.34729-3.46909,12.24332-9.81638,13.16916-.67679,.09872-1.36093,.13745-2.04453,.11578l-39.85132,84.79529-12.49887-17.42969,41.02393-80.18115c.63028-6.41833,6.34433-11.11049,12.7627-10.48019,5.37048,.52739,9.68015,4.66602,10.42447,10.01077v.00003Z"
            fill="#dda1aa"
          />
          <path
            d="M163.83472,183.30061s-1.06793,14.81357,15.68515,17.71899,61.53906-25.41501,68.89432-29.76355,21.06174-59.06061,21.06174-59.06061l-11.9202-20.16183c-14.71741,18.61694-26.27484,35.784-26.97662,47.97l-66.74438,43.297Z"
            fill="#6c63ff"
          />
          <path
            d="M183.17545,234.32722l3.61819,15.54611s.03555,14.3349,2.57428,16.978c2.52094,2.6308,57.95538-2.6514,57.95538-2.6514,0,0-5.87747-23.0997-5.79929-40.57843l-58.34857,10.70572Z"
            fill="#dda1aa"
          />
          <path
            d="M300.28272,433.18022l-20-11c-.3804-26.02478,15.27313-61.24347,33.83954-98.13245-41.52301,7.1413-80.69614,9.42902-114.57919,.79016-11.57434-3.05652-18.55005-14.84-15.66278-26.4577,.1319-.54822,.28439-1.09058,.45752-1.62714,4.05515-12.37247-5.03763-20.12799,3.32559-33.73605,21.9964-7.51227,42.89209-9.63367,62-3l11.97244,26.47131,59.3425-7.67911c11.99951-1.43457,22.89008,7.13,24.32465,19.12955,.00653,.05469,.01288,.10938,.01898,.16412,.07977,.64417,.13184,1.29099,.15631,1.94043-11.99915,56.25272-25.45374,106.86856-45.19556,133.13687Z"
            fill="#2f2e41"
          />
          <path
            d="M175.12006,135.90422l22.86099-1.34982c1.97626-.1167,3.80899,1.03308,4.5639,2.86319l6.46045,15.66165,26.85019,22.19211s10.63071,13.52802,10.65543,30.99911,3.7717,57.90979,3.7717,57.90979c0,0-15.51501-21.83865-25.09122-16.03024-1.62918,.98819-2.20224,3.009-3.90878,4.03024-.85123,.5094-2.81784,.01422-3.67749,.52454-13.19586,7.83347-26.95779,15.48648-28.24365,14.14459-2.52472-2.63467-5.58734-16.09763-5.58734-16.09763l-20.92618-76.88718c-2.29718-8.19113-.81186-16.98035,4.04935-23.96176,1.46194-2.05832,2.99368-3.5896,4.41714-3.84286,3.19617-.6806,1.496-7.84393,3.80551-10.15573Z"
            fill="#6c63ff"
          />
          <polygon
            points="369.58919 482.16 379.23918 475.45099 357.37819 434.207 343.13619 444.10901 369.58919 482.16"
            fill="#dda1aa"
          />
          <path
            d="M371.04779,454.48637l-15.1236,13.51825c-24.04779-26.79565-42.22729-64.37579-57.63342-107.05273-40.36584-11.8222-70.80701-30.88837-97.38187-53.52649-9.01532-7.62851-15.77356-17.42856-8.08469-26.72119,.35947-.43445,.73477-.85452,1.12601-1.26031,9.07831-9.32999,32.10065-7.552,45.58456-16.09964l30.12137,32.19638-1.89465,8.63162,56.57724,19.16489c11.3894,3.99158,17.3866,16.46039,13.39496,27.84979-.01953,.05585-.03937,.11163-.05939,.16736-.21191,.61353-.44977,1.21729-.7135,1.81122l34.08698,101.32086Z"
            fill="#2f2e41"
          />
          <path
            d="M363.96283,479.44029l15.44745-12.16492,4.79987,6.90485,22.67798-.06903c2.901-.00916,5.26019,2.33508,5.26935,5.23608,.00549,1.72607-.8374,3.34467-2.25476,4.32983l-19.18689,13.33759-8.05493-4.53101,3.45654,7.7276-7.23419,5.02881-14.92041-25.7998Z"
            fill="#2f2e41"
          />
          <path
            d="M208.8783,329.67296c-5.9046-2.50616-8.65958-9.32446-6.15341-15.22906,.26721-.62958,.58951-1.23428,.96313-1.80713l-51.7543-78.10162,21.38626-1.62579,47.20245,76.70663c5.15698,3.87274,6.19806,11.19278,2.32532,16.3497-3.24051,4.31512-9.01575,5.84772-13.96945,3.70721v.00006Z"
            fill="#dda1aa"
          />
          <path
            d="M179.12128,156.81078s-12.10318-8.60788-23.2887,4.19806-10.25153,65.78668-10.35663,74.33057c-.0329,2.67542,3.83044,8.44836,9.15311,15.11661,2.38959,2.99365,5.0733,6.16776,7.83066,9.32306,1.59564,1.82593,.22076,5.62646,1.823,7.40115,1.59344,1.76501,6.16418,1.50458,7.67984,3.1427,7.19415,7.77542,13.0386,13.69412,13.0386,13.69412l23.42023,.28799c.26422-17.41016-11.65851-32.95068-26.97577-47.97046l-2.32434-79.5238Z"
            fill="#6c63ff"
          />
          <path
            d="M155.51419,81.0078c-2.21732,1.6004-4.54999,3.24915-7.25562,3.64572s-5.87314-.91138-6.62192-3.54141c-.91553-3.21573,1.98828-6.14371,4.59814-8.23361l8.27591-6.62701c1.51556-1.34409,3.22641-2.45026,5.0741-3.2807,1.87991-.82718,4.03387-.75519,5.85434,.19571,1.80859,1.22131,2.85449,3.29315,2.76309,5.47357-.11804,2.1492-.8273,4.22406-2.04962,5.99576-3.10437,4.83871-8.04962,8.20035-13.6911,9.30673"
            fill="#2f2e41"
          />
          <path
            d="M218.28272,253.18022h-60c-4.41827,0-8,3.58173-8,8s3.58173,8,8,8h22v62h16v-62h22c4.41827,0,8-3.58173,8-8s-3.58173-8-8-8Z"
            fill="#3f3d56"
          />
          <path
            d="M159.19028,64.2235c.24142-5.99814-6.15036-10.74763-12.1398-10.37218s-11.13818,4.58846-14.53482,9.53777c-3.39557,4.94513-5.43542,10.673-8.1105,16.04227s-6.23746,10.62634-11.55322,13.40875c-5.31473,2.77823-12.71286,2.28253-16.38635-2.461-2.31662,3.51312-2.82047,7.91992-1.3566,11.8653,1.50385,3.89438,4.3085,7.14865,7.9382,9.21091,1.44476,.85681,2.98801,1.5354,4.59601,2.021,.66302-1.78964,1.59589-3.46735,2.76624-4.97491-.52863,1.78473-.73041,3.65027-.59564,5.50674,2.47842,.47507,5.02808,.43491,7.4903-.11801,4.9025-1.09665,9.0015-4.43951,11.06174-9.02127,2.24643-5.31775,1.10226-11.38083,1.5827-17.13318,.47629-5.75342,3.94327-12.32135,9.716-12.41513,4.39639-.07233,3.81448,.29013,6.60001,3.69174"
            fill="#2f2e41"
          />
          <path
            d="M199.11124,95.74193c0,14.35941-11.64059,26-26,26s-28-16.64059-28-31,13.64059-21,28-21,26,11.64059,26,26Z"
            fill="#2f2e41"
          />
          <circle
            cx="180.951"
            cy="102.59831"
            r="24.80508"
            transform="translate(-16.89425 38.3571) rotate(-11.56418)"
            fill="#dda1aa"
          />
          <path
            d="M212.11124,98.74193c-7.34299,2.005-14.75693,4.10672-17.62,0-.55637-2.72299-1.61072-5.31985-3.10999-7.66-.28201,2.62073-.89697,5.19479-1.82999,7.66-9.27701,2.01648-17.94754,2.4985-25.44,0-1.03015,1.86331-1.62823,3.93436-1.75,6.06-.37048-.2327-.7583-.43665-1.16-.60999-.48181-.27237-1.05777-.32343-1.57999-.14001-.36118,.21808-.60114,.59094-.64999,1.01001-.04974,.41711-.02948,.83957,.06,1.25,.10495,1.43033,.53229,2.81833,1.25,4.06,.57404,.86475,1.48468,1.44885,2.51001,1.60999,1.04001,5.85001,9.32001,13.76001,9.32001,13.76001-25,1-25-15.95999-25-32l3-6h10v-13h28c13.25339,.00345,23.99652,10.74661,23.99994,24Z"
            fill="#2f2e41"
          />
        </g>
        {/* ------------------------------ GIRL ENDS-------------------------- */}

        <path
          d="M439.9469,506.91136l-438.75,.30731c-.65759,.00342-1.19345-.52686-1.19688-1.18445s.52687-1.19348,1.18446-1.1969h.01242l438.75-.30731c.65759,.00214,1.18896,.53693,1.18683,1.19452-.00208,.6546-.53223,1.18469-1.18683,1.18683Z"
          fill="#cacaca"
        />
        <path
          d="M732.9469,506.91136l-226.75,.30731c-.65759,.00342-1.19348-.52686-1.1969-1.18445s.52692-1.19348,1.18451-1.1969h.01239l226.75-.30731c.65759-.00214,1.19238,.52924,1.19452,1.18683s-.52924,1.19238-1.18683,1.19452h-.00769Z"
          fill="#cacaca"
        />
        {/* <path
          d="M449.97424,147.99998h-85.95312c-7.46533-.00833-13.51508-6.05811-13.52338-13.52344v-56.95309c.0083-7.46533,6.05811-13.51514,13.52344-13.52344h85.95312c7.46533,.0083,13.51514,6.05811,13.52344,13.52344v56.95309c-.0083,7.46536-6.05811,13.51517-13.5235,13.52344Zm-85.95312-82c-6.36121,.00726-11.51617,5.16226-11.52338,11.52347v56.95309c.0072,6.36124,5.16223,11.5162,11.52344,11.52344h85.95312c6.36121-.00723,11.51624-5.1622,11.52344-11.52344v-56.95309c-.0072-6.36124-5.16223-11.5162-11.52344-11.52344l-85.95319-.00003Z"
          fill="#e6e6e6"
        /> */}
        {/* <rect x="366.49767" y="82" width="22.99121" height="2" fill="#e6e6e6" />
        <rect x="366.49767" y="90" width="51" height="2" fill="#e6e6e6" />
        <rect x="366.49767" y="97" width="51" height="2" fill="#e6e6e6" />
        <rect x="366.49767" y="104" width="65" height="2" fill="#e6e6e6" />
        <rect x="366.49767" y="111" width="34" height="2" fill="#e6e6e6" />
        <rect x="366.49767" y="118" width="62" height="2" fill="#e6e6e6" />
        <rect x="366.49767" y="125" width="11" height="2" fill="#e6e6e6" /> */}
        <path
          d="M365.74896,38.95834c-.09714,0-.19409-.03761-.26731-.11247l-2.13369-2.18117c-.14223-.14534-.14223-.37759,0-.52292l2.13369-2.18098c.14479-.14753,.38179-.1499,.52877-.00584,.14771,.14443,.15027,.38124,.00584,.52877l-1.87789,1.91952,1.87789,1.9197c.14443,.14753,.14187,.38434-.00584,.52877-.07267,.07121-.16707,.10663-.26146,.10663Z"
          fill="#ccc"
        />
        <path
          d="M369.33439,38.95834c-.0944,0-.18879-.03542-.26146-.10663-.14771-.14443-.15027-.38106-.00584-.52877l1.87771-1.9197-1.87771-1.91952c-.14443-.14753-.14187-.38434,.00584-.52877,.14735-.14461,.38434-.14187,.52877,.00584l2.13351,2.18098c.14223,.14534,.14223,.37759,0,.52292l-2.13351,2.18117c-.07322,.07486-.17017,.11247-.26731,.11247Z"
          fill="#ccc"
        />
        {/* <path
          d="M480.95765,33.5449h-3.96744c-.45247,0-.81892,.36645-.81892,.81892v3.97119c0,.45247,.36645,.81892,.81892,.81892h3.96744c.45247,0,.82266-.36645,.82266-.81892v-3.97119c0-.45247-.37019-.81892-.82266-.81892Z"
          fill="#ccc"
        /> */}
        {/* <path
          d="M471.23534,33.5449h-3.96744c-.45247,0-.81892,.36645-.81892,.81892v3.97119c0,.45247,.36645,.81892,.81892,.81892h3.96744c.45247,0,.82266-.36645,.82266-.81892v-3.97119c0-.45247-.37019-.81892-.82266-.81892Z"
          fill="#ccc"
        /> */}
        {/* <path
          d="M490.11906,33.73186h-3.96744c-.45247,0-.81892,.36645-.81892,.81892v3.97119c0,.45247,.36645,.81892,.81892,.81892h3.96744c.45247,0,.82266-.36645,.82266-.81892v-3.97119c0-.45247-.37019-.81892-.82266-.81892Z"
          fill="#ccc"
        /> */}
        {/* <path
          d="M430.31875,35.24255h-31.71342c-.55344,0-.99842,.44873-.99842,.99842s.44498,.9984,.99842,.9984h31.71342c.54967,0,.9984-.44873,.9984-.9984s-.44873-.99842-.9984-.99842Z"
          fill="#ccc"
        /> */}
      </g>
    </svg>
  );
}
