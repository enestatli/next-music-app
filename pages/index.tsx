import * as React from 'react';
import Head from 'next/head';
import { AlbumList, Footer, Navigation, SearchBar } from '../src/Components';

import styles from '../styles/Home.module.css';
import axios from 'axios';
import { Album } from '../src/models/app.models';

export default function Home() {
  const [albums, setAlbums] = React.useState<Array<Album>>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://musicdb.jobs.otsimo.com/api/recent/albums`,
          {
            headers: {
              authorization:
                '1.dXN4Y2VyQGV4YW1wbGUuY29t.gjNWY9Zln843popF2kXMRrzN',
            },
          }
        );
        setAlbums(res.data.albums);
      } catch (err) {
        console.log('error while fetching recent albums');
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

      <main className={styles.main}>
        <SearchBar />
        {/* TODO home boolean to get only 10 album */}
        {/* TODO Swipe package */}
        {/* TODO mobile search width up to 95% */}
        <AlbumList albums={albums} />
      </main>
      <Footer />
    </div>
  );
}
