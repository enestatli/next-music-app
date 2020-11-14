/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { useRouter } from 'next/router';

import styles from './AlbumHeader.module.css';

const AlbumHeader = (): JSX.Element => {
  return (
    <div className={styles.card}>
      <img
        src="https://musicdn.otsimo.com/16/96/1696949-600.jpg"
        alt="album-img"
      />
      <div>
        <p>Album Name</p>
        <p>Artist Name</p>
      </div>
    </div>
  );
};

export { AlbumHeader };
