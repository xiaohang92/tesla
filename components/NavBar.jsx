import React, { useState } from "react";
import style from "../styles/NavBar.module.css";
import Image from "next/image";
import logo from "../public/teslalogo.svg";
import { motion } from "framer-motion";
import Sidenav from "./Sidenav";
import { useRouter } from "next/router";
import { isLoggedIn } from "../services/authService";

function NavBar() {
  const data = [
    {
      model: "Model S",
      order: "Order Online for ",
      orderlink: "Touchless Delivery",
      btn1: "custom order",
      btn2: "existing inventory",
      alt: "ModelS",
      key: "1",
    },
    {
      model: "Model Y",
      order: "Order Online for ",
      orderlink: "Touchless Delivery",
      btn1: "custom order",
      btn2: "existing inventory",
      alt: "Model Y",
      key: "2",
    },
    {
      model: "Model 3",
      order: "Order Online for ",
      orderlink: "Touchless Delivery",
      btn1: "custom order",
      btn2: "existing inventory",
      alt: "Model 3",
      key: "3",
    },
    {
      model: "Model X",
      order: "Order Online for ",
      orderlink: "Touchless Delivery",
      btn1: "custom order",
      btn2: "existing inventory",
      alt: "Model X",
      key: "4",
    },
    {
      model: "Solar Panels",
      order: "Lowest Cost Solar Panels in America",
      orderlink: "",
      btn1: "order now",
      btn2: "learn more",
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
      alt: "Solar Roof",
      key: "6",
    },
    {
      model: "Accessories",
      order: "",
      orderlink: "",
      btn1: "Shop now",
      alt: "Accessories",
      copyright: true,
      key: "7",
    },
  ];
  const [open, setopen] = useState(false);
  const hoverVarient = {
    hover: {
      backgroundColor: "#393c4115",
      borderRadius: "10px",
      transition: {
        type: "spring",
        stiffness: 110,
        duration: 0.4,
      },
    },
  };

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const router = useRouter();

  const handleAccountClick = () => {
    // console.log("Account clicked, isLoggedIn:", isLoggedIn());
    if (isLoggedIn()) {
      router.push("/account"); // Navigate to account page if logged in
    } else {
      router.push("/login"); // Navigate to login page if not logged in
    }
  };
  return (
    <>
      {/* <div className={style.report}>
        <p>Read Tesla{`'`}s 2020 Impact Report</p>
      </div> */}

      <nav className={style.mainnav}>
        <div className={style.logo}>
          <Image src={logo} width={120} alt="logo" />
        </div>
        {/* Example of dynamic NavBar based on your data */}
        {router.pathname === "/" && ( // Conditionally render this part only on the homepage
          <div className={style.models}>
            {data.map((e) => (
              <motion.div
                key={e.key}
                onClick={() => scrollToElement(e.key)}
                whileHover="hover"
                className={style.link}>
                {e.model}
              </motion.div>
            ))}
          </div>
        )}
        <div className={style.leftLinks}>
          <div className={style.shopacc}>
            <motion.div
              variants={hoverVarient}
              whileHover="hover"
              className={style.link}>
              Shop
            </motion.div>
            <motion.div
              variants={hoverVarient}
              whileHover="hover"
              className={style.link}
              onClick={handleAccountClick} // Use the handler when the "Account" link is clicked
            >
              Account
            </motion.div>
          </div>
          <motion.div
            onClick={() => setopen(!open)}
            variants={hoverVarient}
            whileHover="hover"
            className={style.link}>
            Menu
          </motion.div>
        </div>
      </nav>
      {open && <Sidenav setopen={setopen} />}
    </>
  );
}

export default NavBar;
