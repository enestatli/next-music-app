import * as React from 'react';
import Head from 'next/head';

import styles from '../../styles/Home.module.css';

import { Navigation, SongCard } from '../../src/Components';
import { Footer } from '../../src/Components/Footer';
import { SearchBar } from '../../src/Components/SearchBar';
import { Music } from '../../src/models/app.models';
import { getSearchedResults } from '../../src/utils/api';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function Search({ songs }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <SearchBar />
      {songs?.length > 0 ? (
        <main className={styles.main}>
          <SongCard search={true} songs={songs} />
        </main>
      ) : (
        <div className={styles.noresult}>No results found.</div>
      )}

      <Footer />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: [{ params: { searchTerm: '' } }],
    //false means other routes should 404
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const songs: Music[] = await getSearchedResults(params.searchTerm);
  return {
    props: { songs },
    // Re-generate the post at most once per second
    // if a request comes in
    // revalidate: 1,
  };
};
