import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '../../styles/Home.module.css';

import { Navigation, SongCard } from '../../src/Components';
import { Footer } from '../../src/Components/Footer';
import { SearchBar } from '../../src/Components/SearchBar';
import { Music } from '../../src/models/app.models';
import { getSearchedResults } from '../../src/utils/api';

export default function Search() {
  const [songs, setSongs] = React.useState<Array<Music>>([]);
  const router = useRouter();

  const { searchTerm } = router.query as { searchTerm: string };

  React.useEffect(() => {
    (async () => {
      const data = await getSearchedResults(searchTerm);
      if (data) {
        setSongs(data);
      }
    })();
  }, [searchTerm]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <SearchBar />
      <main className={styles.main}>
        <SongCard search={true} songs={songs} />
      </main>

      <Footer />
    </div>
  );
}
