import Head from 'next/head';

import {
  AlbumHeader,
  SearchBar,
  Footer,
  Navigation,
  SongList,
} from '../../src/Components';
import styles from '../../styles/Home.module.css';

export default function Album() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <SearchBar />
      <main className={styles.album}>
        <AlbumHeader />
        <SongList />
      </main>
      <Footer />
    </div>
  );
}
