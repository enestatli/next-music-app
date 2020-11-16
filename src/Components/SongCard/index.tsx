/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { useRouter } from 'next/router';

import styles from './SongCard.module.css';
import Link from 'next/link';

interface ISearchProps {
  search: boolean;
  songs: any;
}

const SongCard = ({ search, songs }: ISearchProps): JSX.Element => {
  const [isPlay, setPlay] = React.useState<boolean>(true);
  const [track, setTrack] = React.useState<string>('');

  const playTrack = (url: string, toggler: boolean) => {
    if (url === track) {
      setPlay(false);
    }
    if (toggler) {
      // TODO stop playing
      // setPlay(false);
      setTrack(url);
    } else {
      setPlay(true);
      setTrack('');
    }
  };

  return (
    <div className={styles.grid}>
      {songs !== null ? (
        songs?.map((song: any) => (
          <div key={song.id} className={styles.card}>
            <div className={styles.overlay}>
              <button onClick={() => playTrack(song.url, isPlay)}> </button>
              <img
                className={styles.img}
                src={song.album_images[2]}
                alt={`${song.album_name}-img`}
              />
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
      <audio className={styles.audio} src={track} autoPlay controls />
    </div>
  );
};

export { SongCard };
