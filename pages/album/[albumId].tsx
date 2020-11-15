import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';
import axios from 'axios';

import {
  AlbumHeader,
  SearchBar,
  Footer,
  Navigation,
  SongList,
} from '../../src/Components';
import styles from '../../styles/Home.module.css';

export default function Album() {
  const router = useRouter();
  const [songs, setSongs] = React.useState([]);
  const [album, setAlbum] = React.useState([]);

  const { albumId } = router.query as { albumId: string };

  //TODO move data fetching and playTrack to utils

  React.useEffect(() => {
    // move Redux store
    console.log(albumId);
    (async () => {
      try {
        if (albumId) {
          const res = await axios.get(
            `https://musicdb.jobs.otsimo.com/api/album/${albumId}`,
            {
              headers: {
                authorization:
                  '1.dXN4Y2VyQGV4YW1wbGUuY29t.gjNWY9Zln843popF2kXMRrzN',
              },
            }
          );
          setSongs(res.data.musics);
          setAlbum(res.data.album);
        }
      } catch (err) {
        console.log('error while fetching album', err);
      }
    })();
    console.log(album);
  }, [albumId]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <SearchBar />
      <main className={styles.album}>
        <AlbumHeader album={album} />
        <SongList songs={songs} />
      </main>
      <Footer />
    </div>
  );
}
