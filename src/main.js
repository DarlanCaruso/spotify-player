import spotifyWrapper from './spotify';
import renderAlbumList from './album-list';
import renderAlbumInfo from './album-info';

const albumsElement = document.getElementById('album-list');
const albumInfoElement = document.getElementById('album-info');

const album = spotifyWrapper.album.getAlbum('6peEdPVO73WtgGah5sEhX4');
album.then(data => renderAlbumInfo(data, albumInfoElement));

const albums = spotifyWrapper.search.searchAlbums('Veil of Maya');
albums.then(data => renderAlbumList(data.albums.items, albumsElement));
