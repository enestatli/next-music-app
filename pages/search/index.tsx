import Head from 'next/head';
import { AlbumList, Navigation } from '../../src/Components';
import { Footer } from '../../src/Components/Footer';
import { SearchBar } from '../../src/Components/SearchBar';
import styles from '../../styles/Home.module.css';

// export interface ISearchProps {
//   search: boolean;
// }

export default function Search() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {/* <SearchBar /> */}
      <main className={styles.main}>
        <AlbumList search />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
