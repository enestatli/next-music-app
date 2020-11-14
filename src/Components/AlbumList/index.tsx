/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { useRouter } from 'next/router';

import styles from './AlbumList.module.css';

const AlbumList = ({ search }): JSX.Element => {
  return (
    <div className={styles.grid}>
      {[1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].map((i: any) => (
        <a href="https://nextjs.org/docs" className={styles.card}>
          <img
            className={styles.img}
            src={'https://musicdn.otsimo.com/15/79/1579281-600.jpg'}
            alt="album-img"
          />
          {search ? (
            <>
              <h3>Song Name</h3>
              <p>Artist Name</p>
              <span>License</span>
            </>
          ) : (
            <h3>Album Name</h3>
          )}
        </a>
      ))}
    </div>
  );
};

export { AlbumList };
