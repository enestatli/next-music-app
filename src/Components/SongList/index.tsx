/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { useRouter } from 'next/router';

import styles from './SongList.module.css';
import Link from 'next/link';

interface ISongListProps {
  songs: any;
}

const SongList = ({ songs }: ISongListProps): JSX.Element => {
  const [isPlay, setPlay] = React.useState(true);
  const [track, setTrack] = React.useState('');
  //TODO move playtrack to utils
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
    <div className={styles.list}>
      {songs.map((song: any) => (
        <div key={song.id} className={styles.card}>
          <button onClick={() => playTrack(song.url, isPlay)}> </button>
          <p>{song.name}</p>
          <a href={song.license_ccurl} target="_blank">
            CC
          </a>
          <p>{`${Math.floor(song.duration / 60)} : ${
            (song.duration % 60).toString().length === 1
              ? '0' + (song.duration % 60).toString()
              : song.duration % 60
          }`}</p>
        </div>
      ))}
      <audio className={styles.audio} src={track} autoPlay controls />
    </div>
  );
};

export { SongList };
