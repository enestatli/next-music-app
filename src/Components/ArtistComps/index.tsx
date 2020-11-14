/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { useRouter } from 'next/router';

import styles from './ArtistComp.module.css';

const ArtistComp = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Artist <a href="https://nextjs.org">Name</a>
      </h1>

      <p className={styles.description}>
        <code className={styles.code}>9801428758912367</code>
      </p>

      <div className={styles.grid}>
        {[1, 2, 3].map((i: any) => (
          <a href="https://nextjs.org/docs" className={styles.card}>
            <img
              className={styles.img}
              src={'https://musicdn.otsimo.com/15/79/1579281-600.jpg'}
              alt="album-img"
            />
            <h3>Album Name</h3>
            {/* <h3>Song Name</h3>
            <p>Artist Name</p>
            <span>License</span> */}
          </a>
        ))}
      </div>
    </main>
  );
};

export { ArtistComp };
