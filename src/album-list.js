function createMarkup(data) {
  return data.map(album => `
    <div class="list-item" data-id="${album.id}">
      <img src="${album.images[2].url}" alt="${album.name}" class="list-image"s>
      <div class="list-description">
        <p class="list-title" data-id="${album.id}">${album.name}</p>
        <p class="list-subtitle" data-id="${album.id}">${album.artists[0].name}</p>
      </div>
    </div>`).join('');
}

export default function renderAlbumList(data, element) {
  const markup = createMarkup(data);
  element.innerHTML = markup;
}
