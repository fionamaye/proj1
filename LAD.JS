const videos = [
    'Caleb.mp4',
    'Rafayel.mp4',
    'Sylus.mp4',
    'Xavier.mp4',
    'Zayne.mp4'
];

const randomIndex = Math.floor(Math.random() * videos.lenght);
const selectedVideo = videos[randomIndex];

const videoSource = document.getElementById('video-source');
videoSource.src = selectedVideo;