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

export default function Artist() {
  const router = useRouter();
  const [songs, setSongs] = React.useState([]);
  const [albums, setAlbums] = React.useState([]);
  const [artist, setArtist] = React.useState(null);

  const { artistId } = router.query as { artistId: string };

  React.useEffect(() => {
    console.log(artistId, 'ARTISTID');
    (async () => {
      const res = await axios.get(
        `https://musicdb.jobs.otsimo.com/api/artist/${artistId}`,
        {
          headers: {
            authorization:
              '1.dXN4Y2VyQGV4YW1wbGUuY29t.gjNWY9Zln843popF2kXMRrzN',
          },
        }
      );
      setSongs(res.data.musics);
      setAlbums(res.data.albums);
      setArtist(res.data.artist);
    })();
    console.log(albums[0]);
  }, [artistId]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Music Search App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <SearchBar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          {'artist.name'} <a href="https://nextjs.org">Name</a>
        </h1>

        <p className={styles.description}>
          Digital signature of the artist
          <code className={styles.code}>{'artist.id'}</code>
        </p>

        <AlbumList songs={songs} albums={albums} />
        <SongList songs={songs} />
      </main>
      <Footer />
    </div>
  );
}
