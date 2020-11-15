/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { useRouter } from 'next/router';

import styles from './AlbumHeader.module.css';

interface IAlbumHeaderProps {
  album?: any;
}

//TODO create interface classes

const AlbumHeader = ({ album }: IAlbumHeaderProps): JSX.Element => {
  return (
    <div className={styles.card}>
      <img src={album?.images[2]} alt={`${album.name}-img`} />
      <div>
        <p>{album.name}</p>
        <p>{album.artist_id}</p>
      </div>
    </div>
  );
};

export { AlbumHeader };
