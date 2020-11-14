import Head from 'next/head';
import { AlbumList, Navigation } from '../../src/Components';
import { Footer } from '../../src/Components/Footer';
import { SearchBar } from '../../src/Components/SearchBar';
import { SongList } from '../../src/Components/SongList';
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
      <SongList />
      <Footer />
    </div>
  );
}
