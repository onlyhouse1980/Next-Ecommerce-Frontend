import Image from 'next/image'
import styles from '../styles/WelcomePage.module.css'
import Carousel from '../components/Carousel'
import * as React from "react";
import { motion } from "framer-motion";


const index = () => (
      <div>
      
      
      <container className={styles.misswrap}>
 <div className={styles.dontmove}>  
      <Carousel /> 
</div>
</container>
</div>
)

export default index