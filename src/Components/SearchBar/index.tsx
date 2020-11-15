/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { useRouter } from 'next/router';

import styles from './SearchBar.module.css';

const SearchBar = (): JSX.Element => {
  const [text, setText] = React.useState('');
  const router = useRouter();

  const handleSubmit = (e: any): void => {
    const songName: string | undefined = text;
    console.log(songName);
    e.preventDefault();
    if (songName.length && songName.length >= 3) {
      // Router.push(`/search/songs&q=${songName}`);
      router.push(`/search/${songName}`);
    }
    setText('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search song, artist, album..."
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
      <button className={styles.button} onClick={handleSubmit} type="button">
        {' '}
      </button>
    </form>
  );
};

export { SearchBar };
