/* eslint-disable react/destructuring-assignment */
import * as React from 'react';

import styles from './SongCard.module.css';
import Link from 'next/link';
import { playTrack } from '../../utils/playTrack';

interface ISearchProps {
  search?: boolean;
  songs: any;
}

const SongCard = ({ search, songs }: ISearchProps): JSX.Element => {
  const [isPlay, setPlay] = React.useState<boolean>(false);
  const [track, setTrack] = React.useState<string>('');

  return (
    <div className={styles.grid}>
      {songs ? (
        songs?.map((song: any) => (
          <div key={song.id} className={styles.card}>
            <div className={styles.overlay}>
              <button
                onClick={() =>
                  playTrack(song.url, track, isPlay, setTrack, setPlay)
                }
              >
                {' '}
              </button>
              <img
                className={styles.img}
                src={song.album_images[2]}
                alt={`${song.album_name}-img`}
              />
              <a
                className={styles.download}
                href={song.url}
                download={song.name}
              >
                <img width="16px" src="/images/icons/down-arrow.svg" />
              </a>
            </div>
            <Link href={`/album/${song.album_id}`}>
              <h2>{song.album_name}</h2>
            </Link>
            <h6>{song.name}</h6>
            <Link href={`/artist/${song.artist_id}`}>
              <h3>{song.artist_name}</h3>
            </Link>
            <a href={song.license_ccurl} target="_blank">
              <span>License</span>
            </a>
          </div>
        ))
      ) : (
        <div>
          <p>No search result found.</p>
        </div>
      )}
    </div>
  );
};

export { SongCard };
