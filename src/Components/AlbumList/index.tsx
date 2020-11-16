/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { useRouter } from 'next/router';

import styles from './AlbumList.module.css';
import Link from 'next/link';
import { Album, Music } from '../../models/app.models';

interface ISearchProps {
  albums?: Array<Album>;
}

const AlbumList = ({ albums }: ISearchProps): JSX.Element => {
  return (
    <div className={styles.grid}>
      {albums?.map((album: any) => (
        <Link href={`/album/${album.id}`} key={album.id}>
          <a className={styles.card}>
            <img className={styles.img} src={album.images[2]} alt="album-img" />
            <h3>{album.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export { AlbumList };
