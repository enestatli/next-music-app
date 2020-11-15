/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { useRouter } from 'next/router';

import styles from './AlbumList.module.css';

interface ISearchProps {
  search: boolean;
  songs: any;
}

const AlbumList = ({ search, songs }: ISearchProps): JSX.Element => {
  return (
    <div className={styles.grid}>
      {songs?.map((song: any) => (
        <a key={song.id} href="https://nextjs.org/docs" className={styles.card}>
          <img
            className={styles.img}
            src={song.album_images[2]}
            alt="album-img"
          />
          {search ? (
            <>
              <h3>{song.name}</h3>
              <p>{song.artist_name}</p>
              <a href={song.license__cuurl} target="_blank">
                License
              </a>
            </>
          ) : (
            <h3>Album Name</h3>
          )}
        </a>
      ))}
    </div>
  );
};

export { AlbumList };
