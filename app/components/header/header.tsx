"use client";

import { motion } from "framer-motion";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <section className={styles.header}>
      <motion.div
        className={styles.backgroundText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0 }}
      >
        <p>Sobre</p>
      </motion.div>

      <h1 className={styles.title}>
        &nbsp;&nbsp; A melhor faculdade de tecnologia
      </h1>
    </section>
  );
};

export default Header;
