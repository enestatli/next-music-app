import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AlbumList, Navigation, SongCard } from '../../src/Components';
import { Footer } from '../../src/Components/Footer';
import { SearchBar } from '../../src/Components/SearchBar';

import styles from '../../styles/Home.module.css';
import Axios from 'axios';

export default function Search() {
  const [songs, setSongs] = React.useState([]);
  const router = useRouter();

  const { searchTerm } = router.query as { searchTerm: string };

  React.useEffect(() => {
    console.log(searchTerm);
    (async () => {
      try {
        if (searchTerm) {
          const res = await Axios.get(
            `https://musicdb.jobs.otsimo.com/api/music/search?q=${searchTerm}`,
            {
              headers: {
                authorization:
                  '1.dXN4Y2VyQGV4YW1wbGUuY29t.gjNWY9Zln843popF2kXMRrzN',
              },
            }
          );
          setSongs(res.data.musics);
        }
      } catch (err) {
        console.log('error while fetching search result', err);
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
