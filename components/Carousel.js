import Image from 'next/image'
import styles from '../styles/WelcomePage.module.css'

import * as React from "react";
import { motion } from "framer-motion";


const Carousel = () => (
  
  <div className={styles.contentWrapper}>
    
    <motion.div exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1 }}>
    <motion.div animate={{
        opacity: [1, 1, 0, 0, 0, 0, 0, 1, 1],        
      }}
      transition={{
        duration: 15,
        ease: "easeInOut",
        
        repeat: Infinity,
        repeatDelay: 0
      }} 
      className={styles.bgWrap}>
      <Image
        alt="Orchard Beach"
        src="/Images/WebPFiles/hero-bg.webp"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </motion.div>
    <motion.div animate={{
        opacity: [0, 0, 0, 1, 0, 0, 0, 0, 0],       
      }}
      transition={{
        duration: 12,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0
      }} 
      className={styles.bgWrap}>
      <Image
        alt="Sunrise"
        src="/Images/WebPFiles/sunrise.webp"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </motion.div>
    <motion.div animate={{
        opacity: [0, 0, 0, 0, 0, 1, 0, 0, 0],        
      }}
      transition={{
        duration: 12,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0
      }} 
      className={styles.bgWrap}>
      <Image
        alt="Droplets"
        src="/Images/WebPFiles/boat.webp"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </motion.div>
    <motion.div animate={{
        opacity: [0, 0, 0, 0, 0, 0, 0, 1, 1],        
      }}
      transition={{
        duration: 12,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0
      }} 
      className={styles.bgWrap}>
      <Image
        alt="Droplets"
        src="/Images/WebPFiles/whale.webp"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </motion.div>
    <motion.div animate={{
        opacity: [1, 0, 1, 0, 1, 0, 1, 0, 1],        
      }}
      transition={{
        duration: 12,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0
      }} 
      className={styles.bgWrap}>
      <Image
        alt="Water Droplets"
        src="/Images/WebPFiles/glass_droplets.webp"
        filter="blur"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </motion.div>
    <h2 className={styles.bgText}>
      <b>Orchard Beach</b>
      <br />
      <b>Community Group</b>
    </h2>
    
    </motion.div>
    </div>
)



export default Carousel