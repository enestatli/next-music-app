import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';

import styles from '../../styles/Home.module.css';

import {
  AlbumHeader,
  SearchBar,
  Footer,
  Navigation,
  SongList,
} from '../../src/Components';
import { Album, Music } from '../../src/models/app.models';
import { getAlbumResults } from '../../src/utils/api';

export default function () {
  const router = useRouter();
  const [data, setData] = React.useState<{
    musics: Array<Music>;
    album: Array<Album>;
  }>();

  const { albumId } = router.query as { albumId: string };

  React.useEffect(() => {
    console.log(albumId);
    (async () => {
      const data_ = await getAlbumResults(albumId);
      if (data_) {
        setData(data_);
      }
    })();
  }, [albumId]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <SearchBar />
      {data && (
        <main className={styles.main}>
          <AlbumHeader
            album={data.album}
            name={data.musics[0].artist_name}
            id={data.musics[0].artist_id}
          />
          <SongList songs={data.musics} />
        </main>
      )}
      <Footer />
    </div>
  );
}
