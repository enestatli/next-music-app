import Head from 'next/head';
import {
  AlbumList,
  Navigation,
  SearchBar,
  Footer,
  SongList,
} from '../../src/Components';

import styles from '../../styles/Home.module.css';

export default function Artist() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <SearchBar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Artist <a href="https://nextjs.org">Name</a>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>9801428758912367</code>
        </p>

        <AlbumList />
        <SongList />
      </main>
      <Footer />
    </div>
  );
}
