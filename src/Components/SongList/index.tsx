/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { useRouter } from 'next/router';

import styles from './SongList.module.css';

const SongList = (): JSX.Element => {
  return (
    <div className={styles.list}>
      <div className={styles.card}>
        <button>Play Button</button>
        <p>Name of the song</p>
        <a>CC</a>
        <p>8:48</p>
      </div>
      <div className={styles.card}>
        <button>Play Button</button>
        <p>Name of the song</p>
        <a href="#" target="_blank">
          CC
        </a>
        <p>8:48</p>
      </div>
      <div className={styles.card}>
        <button>Play Button</button>
        <p>Name of the song</p>
        <a href="#" target="_blank">
          CC
        </a>
        <p>8:48</p>
      </div>
    </div>
  );
};

export { SongList };
