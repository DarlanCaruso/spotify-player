import spotifyWrapper from './spotify';
import renderAlbumInfo from './album-info';
import renderAlbumTracks from './album-tracks';

const albumInfoElement = document.getElementById('album-info');
const albumTrackElement = document.getElementById('album-tracks');
const albumListElement = document.getElementById('album-list');

function makeRequest(id) {
  spotifyWrapper.album.getAlbum(id)
    .then(data => renderAlbumInfo(data, albumInfoElement))
    .then(data => renderAlbumTracks(data.tracks.items, albumTrackElement));
}

export default function searchAlbumTrigger() {
  albumListElement.addEventListener('click', (e) => {
    makeRequest(e.target.getAttribute('data-id'));
  });
}
