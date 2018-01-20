import spotifyWrapper from './spotify';
import renderAlbumList from './album-list';

const albumsElement = document.getElementById('album-list');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

export default function searchTrigger() {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    spotifyWrapper.search.searchAlbums(searchInput.value)
      .then(data => renderAlbumList(data.albums.items, albumsElement))
  });
}
