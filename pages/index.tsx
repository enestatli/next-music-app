import * as React from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

import {
  AlbumList,
  Footer,
  Navigation,
  SearchBar,
  SongCard,
} from '../src/Components';
import { Album, Music } from '../src/models/app.models';
import { getRecentAlbums, getRecentMusics } from '../src/utils/api';

export default function Home() {
  const [albums, setAlbums] = React.useState<Array<Album>>([]);
  const [songs, setSongs] = React.useState<Array<Music>>([]);

  React.useEffect(() => {
    (async () => {
      const data = await getRecentAlbums();
      if (data) {
        setAlbums(data);
      }
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <SearchBar />
      <main className={styles.main}>
        <AlbumList albums={albums} />
      </main>
      <Footer />
    </div>
  );
}
