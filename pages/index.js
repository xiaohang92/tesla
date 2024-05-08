import Head from "next/head";
import styles from "../styles/Home.module.css";
import HomeSection from "../components/HomeSection";

import modelsLarge from "../public/model-s-Large.avif";
import modelsSmall from "../public/model-s-Small.avif";

import modelyLarge from "../public/model-y-Large.avif";
import modelySmall from "../public/model-y-Small.avif";

import model3Large from "../public/model-3-Large.avif";
import model3Small from "../public/model-3-Small.avif";

import modelxLarge from "../public/model-x-Large.avif";
import modelxSmall from "../public/model-x-Small.avif";

import solarPanelLarge from "../public/solarPanelLarge.avif";
import solarPanelSmall from "../public/solarPanelSmall.avif";

import solarRoofLarge from "../public/solarRoofLarge.avif";
import solarRoofSmall from "../public/solarRoofSmall.avif";

import Accessories from "../public/Accessories.jpeg";

export default function Home() {
  const data = [
    {
      model: "Model S",
      order: "Order Online for ",
      orderlink: "Touchless Delivery",
      btn1: "custom order",
      btn2: "existing inventory",
      imgDesktop: modelsLarge, // Desktop image (dimension: 4320 × 2700)
      imgMobile: modelsSmall, // Mobile image, can be different (dimension: 1125 × 2436)
      alt: "Model S",
      key: "1",
    },
    {
      model: "Model Y",
      order: "Order Online for ",
      orderlink: "Touchless Delivery",
      btn1: "custom order",
      btn2: "existing inventory",
      imgDesktop: modelyLarge,
      imgMobile: modelySmall,
      alt: "Model Y",
      key: "2",
    },
    {
      model: "Model 3",
      order: "Order Online for ",
      orderlink: "Touchless Delivery",
      btn1: "custom order",
      btn2: "existing inventory",
      imgDesktop: model3Large,
      imgMobile: model3Small,
      alt: "Model 3",
      key: "3",
    },
    {
      model: "Model X",
      order: "Order Online for ",
      orderlink: "Touchless Delivery",
      btn1: "custom order",
      btn2: "existing inventory",
      imgDesktop: modelxLarge,
      imgMobile: modelxSmall,
      alt: "Model X",
      key: "4",
    },
    {
      model: "Solar Panels",
      order: "Lowest Cost Solar Panels in America",
      orderlink: "",
      btn1: "order now",
      btn2: "learn more",
      imgDesktop: solarPanelLarge,
      imgMobile: solarPanelSmall,
      alt: "Solar Panels",
      key: "5",
      textColor: "#a2a4a6",
    },
    {
      model: "Solar Roof",
      order: "Produce Clean Energy From Your Roof",
      orderlink: "",
      btn1: "order now",
      btn2: "learn more",
      imgDesktop: solarRoofLarge,
      imgMobile: solarRoofSmall,
      alt: "Solar Roof",
      key: "6",
    },
    {
      model: "Accessories",
      order: "",
      orderlink: "",
      btn1: "Shop now",
      imgDesktop: Accessories,
      imgMobile: Accessories,
      alt: "Accessories",
      copyright: true,
      key: "7",
    },
  ];
  return (
    <>
      <Head>
        <title>Electric Cars, Solar & Clean Energy | Tesla</title>
      </Head>
      <div className={styles.mainpage}>
        {data.map((e) => {
          return (
            <HomeSection
              key={e.key}
              model={e.model}
              order={e.order}
              orderlink={e.orderlink}
              btn1={e.btn1}
              btn2={e.btn2}
              imgDesktop={e.imgDesktop}
              imgMobile={e.imgMobile}
              alt={e.alt}
              copyright={e.copyright}
              arrow={e.arrow}
              textColor={e.textColor}
              id={e.key}
            />
          );
        })}
      </div>
    </>
  );
}
