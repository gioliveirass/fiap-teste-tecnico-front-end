"use client";

import styles from "./navbar.module.scss";
import Image from "next/image";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { scrollYProgress } = useScroll();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <Image
          className={styles.logo}
          src="/svgs/logo-fiap.svg"
          alt="Fiap"
          width={144}
          height={39}
        />

        <motion.div
          className={styles.progress}
          style={{ scaleX: scrollYProgress }}
        />
      </nav>
    </>
  );
};

export default Navbar;
