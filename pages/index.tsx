import * as React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import styles from '../styles/Home.module.css';

import { AlbumList, Footer, Navigation, SearchBar } from '../src/Components';
import { Album } from '../src/models/app.models';
import { getRecentAlbums } from '../src/utils/api';

export default function Home({ albums }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <SearchBar />
      <main className={styles.main}>
        {albums.length > 0 ? (
          <AlbumList albums={albums} />
        ) : (
          <div className={styles.noresult}>LOADING...</div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const albums: Album[] = await getRecentAlbums();
  return {
    props: {
      albums,
    },
  };
};
