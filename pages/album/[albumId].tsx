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
import { Album, Music } from '../../src/models/app.models';

export default function () {
  const router = useRouter();
  // const [songs, setSongs] = React.useState([]);
  // const [album, setAlbum] = React.useState([]);
  const [data, setData] = React.useState<{
    songs: Array<Music>;
    album: Array<Album>;
  }>();

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
          setData(res.data);
        }
      } catch (err) {
        console.log('error while fetching album', err);
      }
    })();
  }, [albumId]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <SearchBar />
      {data && (
        <main className={styles.main}>
          <AlbumHeader album={data.album} />
          <SongList songs={data.musics} />
        </main>
      )}
      <Footer />
    </div>
  );
}
