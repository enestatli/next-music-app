import * as React from 'react';
import Head from 'next/head';

import styles from '../../styles/Home.module.css';

import { Navigation, SongCard } from '../../src/Components';
import { Footer } from '../../src/Components/Footer';
import { SearchBar } from '../../src/Components/SearchBar';
import { Music } from '../../src/models/app.models';
import { getSearchedResults } from '../../src/utils/api';
import { GetServerSideProps } from 'next';

export default function Search({ songs }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Search Page</title>
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

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: any) => {
  const songs: Music[] = await getSearchedResults(query.searchTerm);
  return {
    props: { songs },
  };
};
