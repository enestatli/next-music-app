import Head from 'next/head';
import { AlbumList, Navigation } from '../../src/Components';
import { SearchBar } from '../../src/Components/SearchBar';
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
      <AlbumList />
    </div>
  );
}
