/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Link from 'next/link';

import styles from './Footer.module.css';

const Footer = (): JSX.Element => (
  <footer className={styles.footer}>
    {/* //TODO edit src alt */}
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <img src="/vercel.svg" alt="Music Logo" className={styles.logo} />
    </a>
  </footer>
);

export { Footer };
