function playMusic(songFileName, songName) {
    const musicPlayer = document.getElementById('music');
    musicPlayer.src = 'Música/' + songFileName;
    musicPlayer.play();
    
    // Actualizar la interfaz de usuario para mostrar el título de la canción
    updateUI(songName);
}

function updateUI(songName) {
    const songTitle = document.getElementById('song-title');
    songTitle.textContent = songName;
}

// Función para reproducir la siguiente canción de la lista
// Función para reproducir la siguiente canción de la lista
function playNextSong() {
    let nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= songList.length) {
        nextSongIndex = 0; // Vuelve al principio si llega al final de la lista
    }
    const nextSong = songList[nextSongIndex];
    playMusic(nextSong);
}

// Función para obtener la siguiente canción de la lista de reproducción
function getNextSong() {
    // Implementa la lógica para obtener la siguiente canción de la lista de reproducción
    // Puedes usar un índice o una lógica más compleja según tus necesidades
}

// Función para reproducir la canción anterior de la lista
function playPreviousSong() {
    // Implementa la lógica para obtener la canción anterior de la lista de reproducción
    const previousSong = getPreviousSong();
    playMusic(previousSong);
}

// Función para obtener la canción anterior de la lista de reproducción
function getPreviousSong() {
    // Implementa la lógica para obtener la canción anterior de la lista de reproducción
    // Puedes usar un índice o una lógica más compleja según tus necesidades
}

// Inicialización del reproductor al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    // Implementa la lógica de inicialización, como cargar la lista de reproducción, etc.
    // Puedes llamar a funciones adicionales aquí para cargar datos adicionales o configurar el reproductor
});
