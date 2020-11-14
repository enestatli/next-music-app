import Head from 'next/head';
import { AlbumList, Footer, Navigation, SearchBar } from '../src/Components';

import styles from '../styles/Home.module.css';

export default function Home() {
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
        <AlbumList home />
      </main>
      <Footer />
    </div>
  );
}
