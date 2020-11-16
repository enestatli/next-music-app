import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '../../styles/Home.module.css';

import {
  AlbumList,
  Navigation,
  SearchBar,
  Footer,
  SongList,
} from '../../src/Components';

import { Album, Artist, Music } from '../../src/models/app.models';
import { getArtistResults } from '../../src/utils/api';

export default function () {
  const router = useRouter();
  const [data, setData] = React.useState<{
    musics: Array<Music>;
    albums: Array<Album>;
    artist: Artist;
  }>();

  const { artistId } = router.query as { artistId: string };

  React.useEffect(() => {
    (async () => {
      const data_ = await getArtistResults(artistId);
      if (data_) {
        setData(data_);
      }
    })();
  }, [artistId]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Music Search App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <SearchBar />
      {data ? (
        <main className={styles.main}>
          <h1 className={styles.title}>{data.artist?.name}</h1>

          <p className={styles.description}>
            Digital signature of the artist
            <code className={styles.code}>{data.artist?.id}</code>
          </p>
          {/* TODO albumlist fix css when only 1 album */}
          <AlbumList albums={data.albums} />
          <SongList songs={data.musics} />
        </main>
      ) : (
        <div className={styles.noresult}>LOADING...</div>
      )}
      <Footer />
    </div>
  );
}
