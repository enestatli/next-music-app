/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { useRouter } from 'next/router';

import styles from './AlbumList.module.css';
import Link from 'next/link';

interface ISearchProps {
  songs: any;
  albums: any;
}

const AlbumList = ({ albums }: ISearchProps): JSX.Element => {
  return (
    <div className={styles.grid}>
      {albums?.map((album: any) => (
        <Link href={`/album/${album.id}`}>
          <a
            key={album.id}
            href="https://nextjs.org/docs"
            className={styles.card}
          >
            <img className={styles.img} src={album.images[2]} alt="album-img" />
            <h3>{album.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export { AlbumList };
