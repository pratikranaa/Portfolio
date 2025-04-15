import React, { useContext, useRef } from 'react';
import { store } from '../../App';
import { motion } from "framer-motion";
import './IntroCards.scss';

export default function IntroCards () {
  const [state, dispatch] = useContext(store);
  const scrollRef = useRef(null);

  return (
    <div className="container-intro">
      <section className={`left-intro big-card ${state.darkmode ? "dark-card" : "light-card"}`}>
        <h3 className={`${state.darkmode ? "dark-heading" : "light-heading"}`}>{ "Software Engineer at the intersection of AI/ML and backend development"}</h3>
        <p className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{"Starting with Python and JavaScript, I taught myself programming on my own. However, nowadays there is a lot to discover beyond simple tech: Today I work on creating efficient & scalabale software systems using Typescript with Next.js for Web Development, Python for AI/ML, & PostgreSQL for Databases."}</p>
      </section>

      <section className="right-intro" ref={scrollRef}>
        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num green">400</h2>
                <h2 className="sign green-sign">+</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>Leetcode Solutions</h4>
        </motion.div>

        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
            initial={{ scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num place blue">{"Won"}</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{state.language === "english" ? `Several National Level Hackathons` : `Several National Level Hackathons   "`}</h4>
        </motion.div>

        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
            initial={{ scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num purple">10</h2>
                <h2 className="sign purple-sign">+</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{state.language === "english" ? "Projects" : "Projects"}</h4>  
        </motion.div>

        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
            initial={{ scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num red">100</h2>
                <h2 className="sign percent red-sign">%</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{state.language === "english" ? "Passion%" : "Passion%"}</h4>
        </motion.div>
      </section>
    </div>
  );
}