/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Link from 'next/link';

import styles from './Navigation.module.css';

const Navigation = (): JSX.Element => (
  <div className={styles.nav}>
    <div className={styles.div}>
      <Link href="/" passHref>
        <a className={styles.a}>Home</a>
      </Link>
    </div>
  </div>
);

export { Navigation };
