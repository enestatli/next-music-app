import axios from 'axios';

const baseUrl: string = 'https://musicdb.jobs.otsimo.com/api';
const authorization = '1.dXN4Y2VyQGV4YW1wbGUuY29t.gjNWY9Zln843popF2kXMRrzN';

const getRecentAlbums = async () => {
  try {
    const res = await axios.get(`${baseUrl}/recent/albums`, {
      headers: { authorization },
    });
    return res.data.albums;
  } catch (err) {
    console.log('error while fetching recent albums', err);
  }
};

const getRecentMusics = async () => {
  try {
    const res = await axios.get(`${baseUrl}/recent/musics`, {
      headers: { authorization },
    });
    return res.data.musics;
  } catch (err) {
    console.log('error while fetching recent albums', err);
  }
};

const getSearchedResults = async (searchTerm: string) => {
  try {
    if (searchTerm) {
      const res = await axios.get(`${baseUrl}/music/search?q=${searchTerm}`, {
        headers: { authorization },
      });
      return res.data.musics;
    }
  } catch (err) {
    console.log('error while fetching search result', err);
  }
};

const getArtistResults = async (artistId: string) => {
  try {
    if (artistId) {
      const res = await axios.get(`${baseUrl}/artist/${artistId}`, {
        headers: { authorization },
      });
      return res.data;
    }
  } catch (err) {
    console.log('error while fetching artist', err);
  }
};

const getAlbumResults = async (albumId: string) => {
  try {
    if (albumId) {
      const res = await axios.get(`${baseUrl}/album/${albumId}`, {
        headers: { authorization },
      });
      return res.data;
    }
  } catch (err) {
    console.log('error while fetching album', err);
  }
};

export {
  getRecentAlbums,
  getRecentMusics,
  getSearchedResults,
  getArtistResults,
  getAlbumResults,
};
