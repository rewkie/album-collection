import SongComments from './SongComments'
import Tags from './Tags'

export default function Songs(songs) {
    return `
        <ol id="songs">
            ${songs.map(song => {
                return `
                    <li class="song">
                        <h3 class="song__title">${song.songTitle}<span><small> (${song.duration})</small></span></h3>
                        <div class="song__comment_list hidden">
                            <ul>
                                <li>${Tags(song.tags)}</li>
                                <li>${SongComments(song.songComments)}</li>
                            </ul>
                        </div>
                    </li>
                `;
            }).join('')}
        </ol>
        
        <section class="add-song">
        <input class= "add-song__songTitle" type = "text" placeholder= "Song name">
        <input class= "add-song__album" type = "text" placeholder= "Album Name">
        <input class= "add-song__duration" type = "text" placeholder= "Song Duration">
        <input class= "add-song__songRating" type = "text" placeholder= "Song Rating">
        <input class= "add-song__tag" type = "text" placeholder= "Tag">
        <button class="add-song__submit">Submit</button>
        </section>
        
        `}   