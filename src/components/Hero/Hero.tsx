import React, { useContext } from "react";
import "./Hero.scss";
import { motion } from "framer-motion";
import { store } from "../../App";
import scroll from "../../utils/Helpers/scroll";
import playAudio from "../../utils/Helpers/playAudio";

export default function Hero() {
  const [state, dispatch] = useContext(store);

  return (
    <div className={`container-hero ${state.darkmode ? "dark-bg-1" : "light-bg-1"}`}>
      <div className="anchor" id="hero" />
      <motion.div
        className="container-avatar"
        initial={{ opacity: 0, y: 350 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
        <img
          className="img-avatar"
          src={require("../../assets/images/pratik.png")}
        />
      </motion.div>

      <motion.h2
        className={`${state.darkmode ? "white-opacity" : "light-eyebrow"}`}
        initial={{ opacity: 0, y: 140 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          opacity: { duration: 0.2, type: "tween" },
          y: { duration: 0.55, type: "spring" },
        }}
      >
        Pratik Rana
      </motion.h2>

      <motion.h1
        className={`${state.darkmode ? "dark-heading" : "light-heading"}`}
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.29,
          opacity: { duration: 0.2, type: "tween" },
          y: { duration: 0.6, type: "spring" },
        }}
      >
        {state.language === "english" ? "AI/ML & Software Engineer" : "AI/ML & Software Engineer"}
      </motion.h1>

      <motion.h4
        className={`${state.darkmode ? "white-opacity-max" : "light-phrase"}`}
        initial={{ opacity: 0, y: 140 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          opacity: { duration: 0.15, type: "tween" },
          y: { duration: 0.55, type: "spring" },
        }}
      >
        {state.language === "english" ? "Inquisitive individual, constantly seeking out new & innovative practices to refine my skills and build useful solutions." : "Inquisitive individual, constantly seeking out new & innovative practices to refine my skills and build useful solutions."}
      </motion.h4>

      <motion.button
        onClick={(e) => scroll("about-me")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
        initial={{ opacity: 0, y: 140 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          opacity: { duration: 0.15, type: "tween" },
          y: { duration: 0.4, type: "spring" },
        }}
      >
        <h3>{state.language === "english" ? "Find out more!" : "Find out more!"}</h3>
        <img src={require("../../assets/images/arrow.png")} />
      </motion.button>
    </div>
  );
}