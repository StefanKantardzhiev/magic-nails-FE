import React, { FC } from 'react';
import styles from './Footer.module.css';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className={styles.Footer}>
   <p>Build from scratch by PcBuildz Web &copy; 2024</p> 
  </div>
);

export default Footer;
