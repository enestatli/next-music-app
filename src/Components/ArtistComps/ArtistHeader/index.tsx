/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { useRouter } from 'next/router';

import styles from './ArtistComps.module.css';

const ArtistComp = (): JSX.Element => {
  return (
    <>
      <h1 className={styles.title}>
        Artist <a href="https://nextjs.org">Name</a>
      </h1>

      <p className={styles.description}>
        <code className={styles.code}>9801428758912367</code>
      </p>
    </>
  );
};

export { ArtistComp };
