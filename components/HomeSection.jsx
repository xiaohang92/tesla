import React from "react";
import Image from "next/image";
import styles from "../styles/HomeSection.module.css";
import { motion } from "framer-motion";
import useWindowWidth from "../hooks/useWindowWidth";

function HomeSection({
  model,
  order,
  orderlink,
  btn1,
  btn2,
  imgDesktop,
  imgMobile,
  alt,
  copyright,
  textColor,
  id,
}) {
  // Define motion variants for the fade effect
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const screenWidth = useWindowWidth(); // Custom hook to get screen width
  const imgSrc = screenWidth >= 768 ? imgDesktop : imgMobile; // Choose image based on screen width

  return (
    <div id={id} className={styles.sections}>
      <Image
        src={imgSrc}
        alt={alt}
        style={{ objectFit: "cover", objectPosition: "center" }}
        className={styles.modeling}
        fill
      />

      <motion.div
        className={styles.details}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeUpVariants}>
        <div>
          <h2 style={{ color: textColor }}>{model}</h2>
          <p style={{ color: textColor }}>
            {order}
            <a style={{ color: textColor }}>{orderlink}</a>
          </p>
        </div>

        <div className={styles.btnss}>
          <div>
            <button className={styles.btn1}>{btn1}</button>
            {btn2 && <button className={styles.btn2}>{btn2}</button>}
          </div>
        </div>
      </motion.div>
      {copyright && (
        <p className={styles.copy}>
          Tesla &nbsp; ©&nbsp; {new Date().getFullYear()}&nbsp; Privacy&nbsp;
          &&nbsp; Legal&nbsp; Contact&nbsp; Careers&nbsp; News&nbsp; Engage
          &nbsp;Locations
        </p>
      )}
    </div>
  );
}

export default HomeSection;
