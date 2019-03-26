import Albums from './Albums'

export default function Artists(artists) {
    return `
      <ul id="artists" class="grid-list">
        ${artists.map(artist => {
        return `
                <li id="artist" class="grid-list--item">
                  <div class="grid-item-container">
                    <img class="grid-image" src="${artist.artistImage}" alt="Artist Image">
                    <h3 class="item-name">${artist.artistName}</h3>
                    </div>
                  <div id ="album-modal" class="hidden modal">
                    <div class="modal-content">${Albums(artist.albums)}
                    </div>
                  </div>
                    </li>
            `;
    }).join('')}
    </ul>
    <section class="add-artist">
    <input class= "add-artist__artistName" type = "text" placeholder= "Artist Name">
    <input class= "add-artist__artistImage" type = "text" placeholder= "Artist Image">
    <input class= "add-artist__artistRating" type = "text" placeholder= "Artist Rating">
    <button class="add-artist__submit">Submit</button>
    </section>

   




   <!--unused sections <section class="add-albums">
    <input class= "add-album__albumTitle" type = "text" placeholder= "Album Title">
    <input class= "add-album__albumCover" type = "text" placeholder= "Album Image">
    <input class= "add-album__albumRating" type = "text" placeholder= "Album Rating">
    <input class= "add-album__artist" type = "text" placeholder= "Artist Name">
    <button class="add-album__submit">Submit</button>
    </section>

    <section class="add-song">
    <input class= "add-song__songTitle" type = "text" placeholder= "Song name">
    <input class= "add-song__album" type = "text" placeholder= "Album Name">
    <input class= "add-song__duration" type = "text" placeholder= "Song Duration">
    <input class= "add-song__songRating" type = "text" placeholder= "Song Rating">
    <button class="add-song__submit">Submit</button>
    </section>  -->
  `;
}