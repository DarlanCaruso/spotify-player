import { expect } from 'chai';
import spotifyWrapper from '../src/spotify';
import SpotifyWrapper from 'js-spotify-wrapper';

describe('Spotify', () => {
  it('should be an instance of SpotifyWrapper', () => {
    expect(spotifyWrapper).to.be.an.instanceof(SpotifyWrapper);
  });

  it('should have the search methods', () => {
    expect(spotifyWrapper.search).to.exist;
  });

  it('should have the album methos', () => {
    expect(spotifyWrapper.album).to.exist;
  });
});