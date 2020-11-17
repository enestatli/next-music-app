import Head from 'next/head';
import * as React from 'react';

import styles from '../../styles/Home.module.css';

import {
  AlbumHeader,
  SearchBar,
  Footer,
  Navigation,
  SongList,
} from '../../src/Components';
import { Album, Music } from '../../src/models/app.models';
import { getAlbumResults } from '../../src/utils/api';
import { GetServerSideProps } from 'next';

export default function AlbumPage({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Album Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <SearchBar />
      {data ? (
        <main className={styles.main}>
          <AlbumHeader
            album={data.album}
            name={data.musics[0].artist_name}
            id={data.musics[0].artist_id}
          />
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
  } = await getAlbumResults(query.albumId);
  return {
    props: { data },
  };
};
