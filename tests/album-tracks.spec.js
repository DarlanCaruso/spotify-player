import 'jsdom-global/register';
import { expect } from 'chai';
import convertMs from '../src/convert-ms';

import renderAlbumTracks from '../src/album-tracks';

describe('Album Tracks', () => {
  const data = [
    {
      "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number": 1,
      "name": "Around The World",
      "duration_ms": 238733
    }
  ];

  const newData = convertMs(data[0].duration_ms);

  const markup = `
    <div class="music" data-track-preview="${data[0].preview_url}">
      <p class="music-number">${data[0].track_number}</p>
      <p class="music-title">${data[0].name}</p>
      <p class="music-duration">${newData}</p>
    </div>`;

  const data2 = [
    {
      "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number": 1,
      "name": "Around The World",
      "duration_ms": 238733
    },
    {
      "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number": 1,
      "name": "Around The World",
      "duration_ms": 238733
    },
  ];

  const markup2 = `
    <div class="music" data-track-preview="${data[0].preview_url}">
      <p class="music-number">${data[0].track_number}</p>
      <p class="music-title">${data[0].name}</p>
      <p class="music-duration">${newData}</p>
    </div>
    <div class="music" data-track-preview="${data[0].preview_url}">
      <p class="music-number">${data[0].track_number}</p>
      <p class="music-title">${data[0].name}</p>
      <p class="music-duration">${newData}</p>
    </div>`;

  it('should create and append the markup with the correct data ', () => {

    const element = document.createElement('div');
    renderAlbumTracks(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

  it('should create and append when more than 1 track', () => {
    const element2 = document.createElement('div');
    renderAlbumTracks(data2, element2);
    expect(element2.innerHTML).to.be.eql(markup2);
  });
});