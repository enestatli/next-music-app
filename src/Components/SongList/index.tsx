/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { useRouter } from 'next/router';

import styles from './SongList.module.css';

const SongList = (): JSX.Element => {
  return (
    <div className={styles.songListWrapper}>
      <div>
        <button>Play Button</button>
        <p>Name of the song</p>
        <span>CC</span>
        <p>8:48</p>
      </div>
      <div>
        <button>Play Button</button>
        <p>Name of the song</p>
        <span>CC</span>
        <p>8:48</p>
      </div>
    </div>
  );
};

export { SongList };
