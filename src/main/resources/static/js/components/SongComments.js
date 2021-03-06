export default function SongComments(songComments) {
    return `
      <ul id="song-comments">
        ${songComments.map(songComment => {
        return `
            <li id="songComment">
                <p class="song-comment">${songComment.commentContent}</p>
            </li>
        `;
    }).join('')}
    </ul>

    <section class="add-song-comment">
    <input class= "add-song-comment__comment" type = "text" placeholder= "Type your comment here.">
    <input class= "add-song-comment__song" type = "text" placeholder= "Song Name">
    <button class="add-song-comment__submit">Submit</button>
    </section>
    `
}