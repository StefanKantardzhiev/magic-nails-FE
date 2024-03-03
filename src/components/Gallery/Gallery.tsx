import React, { FC } from 'react';
import styles from './Gallery.module.css';

interface GalleryProps {}

const Gallery: FC<GalleryProps> = () => (
  <div className={styles.Gallery}>
    Gallery Component
  </div>
);

export default Gallery;
