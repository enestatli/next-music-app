/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Link from 'next/link';

import styles from './Navigation.module.css';
//TODO add home page recent album 10 pieces
const Navigation = (): JSX.Element => (
  <header className={styles.header}>
    <Link href="/" passHref>
      <a rel="noopener noreferrer">
        Next Music{' '}
        <img
          src="/images/icons/play-button-arrowhead.svg"
          alt="Vercel Logo"
          className={styles.logo}
        />
      </a>
    </Link>
  </header>
);

export { Navigation };
