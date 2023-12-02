const audioContext = new AudioContext();
const audioElement = document.getElementById("myAudio");
const audioSource = audioContext.createMediaElementSource(audioElement);

// Load audio file
audioElement.src = "path/to/audio/file.mp3";


const gainNode = audioContext.createGain();
audioSource.connect(gainNode);
gainNode.connect(audioContext.destination);



audioContext.resume()
  .then(() => {
    audioElement.play();
  });
