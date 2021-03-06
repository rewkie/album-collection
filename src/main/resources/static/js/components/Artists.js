import Albums from './Albums'
import Tags from './Tags'
import ArtistComments from './ArtistComments'


export default function Artists(artists) {
    return `
      <ul id="artists" class="grid-list">
        ${artists.map(artist => {
        return `
                <li id="artist" class="grid-list--item">
                  <div class="grid-item-container">
                    <img class="grid-image btn-artist" src="${artist.artistImage}" alt="Artist Image">
                    <h3 class="item-name">${artist.artistName}</h3>
                  </div>

                  <div id ="artist-modal" class="hidden modal">
                    <div class="modal-content">
                      <div class="modal-content--header">
                        <img class="model--header-image" src="${artist.artistImage}" alt="Artist Image">
                        <h2>${artist.artistName}</h2>
                        <ul>
                          <li>Artist Rating: ${artist.artistRating}/10</li>
                          <li>Albums: ${artist.albums.length}</li>
                          <li>${Tags(artist.tags)}</li>
                          <li class="artistCommentOn">Comments</li>
                          <li class="artistCommentOff hidden">Close Comments</li>
                        </ul>
                      </div>

                      <section class="add-album subheader">
                      <input class= "add-album__albumTitle" type = "text" placeholder= "Album Title">
                      <input class= "add-album__albumCover" type = "text" placeholder= "Album Image">
                      <input class= "add-album__albumRating" type = "text" placeholder= "Album Rating (out of 10)">
                      <input class= "hidden add-album__artist" type = "text" placeholder= "Artist Name" value="${artist.artistId}">
                      <input class= "add-album__tag" type = "text" placeholder= "Tag">
                      <button class="add-album__submit">Add Album</button>
                      </section>

                      <div class="modal-content--body albums">${Albums(artist.albums)}</div>
                      <div class="modal-content--body comments hidden">${ArtistComments(artist.artistComments)}
                               <section class="add-artist-comment">
                               <input class= "add-artist-comment__comment" type = "text" placeholder= "Type your comment here.">
                               <input class= "hidden add-artist-comment__artist" type = "text" placeholder= "Artist Name" value="${artist.artistId}">

                              <button class="add-artist-comment__submit">Submit</button>

                      </div>
                    </div>
                  </div>
                </li>
            `;
    }).join('')}
    </ul>
    <div class="subheader add-artist">
        <input class= "add-artist__artistName" type = "text" placeholder= "Artist Name">
        <input class= "add-artist__artistImage" type = "text" placeholder= "Artist Image">
        <input class= "add-artist__artistRating" type = "text" placeholder= "Artist Rating">
        <input class= "add-artist__tag" type = "text" placeholder= "Add a Tag">
        <button class="add-artist__submit">Submit</button>
    </div>
    <div class="subheader add-tag">
        <input class= "add-tag__tag" type = "text" placeholder= "Add a New Tag">
        <button class="add-tag__submit">Submit</button>
    </div>    


  `;
}
