import spotifyWrapper from './spotify';
import renderAlbumInfo from './album-info';
import renderAlbumTracks from './album-tracks';

const albumInfoElement = document.getElementById('album-info');
const albumTrackElement = document.getElementById('album-tracks');
const albumListElement = document.getElementById('album-list');

function makeRequest(album) {
  spotifyWrapper.album.getAlbum('album')
    .then(data => renderAlbumInfo(data, albumInfoElement))
    .then(data => renderAlbumTracks(data.tracks.items, albumTrackElement));
}

export default function searchAlbumTrigger() {
  albumListElement.addEventListener('click', (e) => {
    console.log(e.target);
  });
}
