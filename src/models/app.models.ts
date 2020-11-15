export interface Music {
  id: string;
  name: string;
  duration: number;
  album_id: string;
  album_name: string;
  artist_id: string;
  artist_name: string;
  license_ccurl: string;
  url: string;
  album_images: string[];
  added_at: string;
  musics: [];
}

export interface Album {
  id: string;
  name: string;
  artist_id: string;
  images: string[];
  added_at: string;
  musics: [];
}

export interface Artist {
  id: string;
  name: string;
}
