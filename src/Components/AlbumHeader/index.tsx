/* eslint-disable react/destructuring-assignment */
import * as React from 'react';

import styles from './AlbumHeader.module.css';
import Link from 'next/link';

interface IAlbumHeaderProps {
  album?: any;
  name: string;
  id: string;
}

//TODO create interface classes

const AlbumHeader = ({ album, name, id }: IAlbumHeaderProps): JSX.Element => {
  return (
    <div className={styles.card}>
      <img src={album?.images[2]} alt={`${album.name}-img`} />
      <div>
        <p>{album.name}</p>
        <Link href={`/artist/${id}`}>
          <p className={styles.artistName}>{name}</p>
        </Link>
      </div>
    </div>
  );
};

export { AlbumHeader };
