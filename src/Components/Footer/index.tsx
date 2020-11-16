import * as React from 'react';

import styles from './Footer.module.css';

const Footer = (): JSX.Element => (
  <footer className={styles.footer}>
    <a
      href="https://github.com/enestatli"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by Enes Tatli{' '}
      <img
        width="16px"
        height="16px"
        src="/images/icons/icon-black-copyright.svg"
        alt="copyright-logo"
        className={styles.logo}
      />
    </a>
  </footer>
);

export { Footer };
