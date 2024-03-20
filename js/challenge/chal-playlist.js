// Managing a Playlist

function managePlaylist (playlist, newSong) {
    playlist.shift();
    playlist.unshift(newSong);
    return playlist;
}

const initialPlaylist = ['Ex', 'Carry you', 'OK!'];
const newSongToAdd = 'Shove it';

const updadtedPlaylist = managePlaylist(initialPlaylist, newSongToAdd);

console.log('Initial playlist: ', initialPlaylist); // No se muestra la primera cancion de la playlist inicial ya que con los metodos trabajados modifican el array original
console.log('New song to add: ', newSongToAdd);
console.log('Updated playlist: ', updadtedPlaylist);