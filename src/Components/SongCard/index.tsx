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
  const [isPlay, setPlay] = React.useState(true);
  const [track, setTrack] = React.useState('');

  const playTrack = (url: string, toggler: boolean) => {
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
      {songs?.map((song: any) => (
        <div key={song.id} className={styles.card}>
          <button onClick={() => playTrack(song.url, isPlay)}> </button>
          <img
            className={styles.img}
            src={song.album_images[2]}
            alt={`${song.album_name}-img`}
          />
          <Link href={`/album/${song.album_id}`}>
            <h3>Album Name</h3>
          </Link>
          <h6>{song.name}</h6>
          <Link href={`/artist/${song.artist_id}`}>
            <h3>{song.artist_name}</h3>
          </Link>
          <a href={song.license__cuurl} target="_blank">
            <span>License</span>
          </a>
        </div>
      ))}
      <audio className={styles.audio} src={track} autoPlay controls />
    </div>
  );
};

export { SongCard };
