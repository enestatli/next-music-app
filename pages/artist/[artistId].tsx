import * as React from 'react';
import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/router';

import {
  AlbumList,
  Navigation,
  SearchBar,
  Footer,
  SongList,
} from '../../src/Components';

import styles from '../../styles/Home.module.css';
import { Album, Artist, Music } from '../../src/models/app.models';

export default function () {
  const router = useRouter();
  const [data, setData] = React.useState<{
    songs: Array<Music>;
    albums: Array<Album>;
    artist: Artist;
  }>();

  const { artistId } = router.query as { artistId: string };

  React.useEffect(() => {
    (async () => {
      try {
        if (artistId) {
          const res = await axios.get(
            `https://musicdb.jobs.otsimo.com/api/artist/${artistId}`,
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
        console.log('error while fetching artist', err);
      }
    })();
  }, [artistId]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Music Search App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <SearchBar />
      {data ? (
        <main className={styles.main}>
          <h1 className={styles.title}>
            {data.artist?.name} <a href="https://nextjs.org">Name</a>
          </h1>

          <p className={styles.description}>
            Digital signature of the artist
            <code className={styles.code}>{data.artist?.id}</code>
          </p>

          <AlbumList songs={data.songs} albums={data.albums} />
          <SongList songs={data.songs} />
        </main>
      ) : (
        <div>LOADING</div>
      )}
      <Footer />
    </div>
  );
}
