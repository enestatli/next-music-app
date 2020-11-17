import * as React from 'react';
import Head from 'next/head';

import styles from '../../styles/Home.module.css';

import {
  AlbumList,
  Navigation,
  SearchBar,
  Footer,
  SongList,
} from '../../src/Components';

import { Album, Artist, Music } from '../../src/models/app.models';
import { getArtistResults } from '../../src/utils/api';
import { GetServerSideProps } from 'next';

export default function ArtistPage({ data }) {
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
          <h1 className={styles.title}>{data.artist?.name}</h1>

          <p className={styles.description}>
            Digital signature of the artist
            <code className={styles.code}>{data.artist?.id}</code>
          </p>

          <AlbumList albums={data.albums} />
          <SongList songs={data.musics} />
        </main>
      ) : (
        <div className={styles.noresult}>LOADING...</div>
      )}
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: any) => {
  const data: {
    musics: Array<Music>;
    albums: Array<Album>;
    artist: Artist;
  } = await getArtistResults(query.artistId);
  return {
    props: { data },
  };
};
