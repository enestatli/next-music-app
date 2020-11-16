export const playTrack = (
  url: string,
  track: string,
  toggler: boolean,
  setTrack: any,
  setPlay: any
): void => {
  if (toggler) {
    setTrack(url);
    if (url === track) {
      setTrack('');
      setPlay(false);
    }
  } else {
    setTrack(url);
    setPlay(true);
  }
};
