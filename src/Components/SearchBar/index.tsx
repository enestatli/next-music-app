/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { useRouter } from 'next/router';

import styles from './SearchBar.module.css';

const SearchBar = (): JSX.Element => {
  const [text, setText] = React.useState<string>('');
  const router = useRouter();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ): void => {
    const songName: string | undefined = text.trim();
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
