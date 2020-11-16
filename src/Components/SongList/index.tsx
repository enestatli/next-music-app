/* eslint-disable react/destructuring-assignment */
import * as React from 'react';

import styles from './SongList.module.css';
import { Music } from '../../models/app.models';
import { playTrack } from '../../utils/playTrack';

interface ISongListProps {
  songs?: Array<Music>;
}

const SongList = ({ songs }: ISongListProps): JSX.Element => {
  const [isPlay, setPlay] = React.useState<boolean>(true);
  const [track, setTrack] = React.useState<string>('');
  //TODO move playtrack to utils

  return (
    <div className={styles.list}>
      {songs?.map((song: any) => (
        <div key={song.id} className={styles.card}>
          <div className={styles.left}>
            <button
              onClick={() =>
                playTrack(song.url, track, isPlay, setTrack, setPlay)
              }
            >
              {' '}
            </button>
            <p>{song.name}</p>
          </div>
          <div className={styles.right}>
            <a
              className={styles.licenseFrame}
              href={song.license_ccurl}
              target="_blank"
            >
              <img
                className={styles.licenseIcon}
                width="12px"
                height="12px"
                src="/images/icons/icon-black-copyright.svg"
                alt="license-logo"
              />
            </a>
            <p className={styles.duration}>{`${Math.floor(
              song.duration / 60
            )} : ${
              (song.duration % 60).toString().length === 1
                ? '0' + (song.duration % 60).toString()
                : song.duration % 60
            }`}</p>
          </div>
        </div>
      ))}
      <audio className={styles.audio} src={track} autoPlay controls />
    </div>
  );
};

export { SongList };
