const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Apna Bana Le",
    name: "ft. Arjit Singh",
    source:
      "https://github.com/Varp17/MusicLove/raw/main/MusicNik/Apna%20Bana%20Le%20-%20Full%20Audio%20%20%20Bhediya%20%20%20Varun%20Dhawan%2C%20Kriti%20Sa.mp3",
  },
  {
    title: "Chashni",
    name: "Vishal & Shekhar feat. Abhijeet Srivastava",
    source:
      "https://github.com/Varp17/MusicLove/raw/main/MusicNik/Chashni%20-%20Abhijeet%20Srivastava.mp3",
  },
  {
    title: "Kesariya",
    name: "Arjit Singh",
    source:
      "https://github.com/Varp17/MusicLove/raw/main/MusicNik/Kesariya%20-%20Arijit%20Singh.mp3",
  },
  {
    title: "Kudi Nu Nachne De",
    name: " Vishal Dadlani, Sachin- Jigar",
    source:
      "https://github.com/Varp17/MusicLove/raw/main/MusicNik/Kudi%20Nu%20Nachne%20De%20%20Angrezi%20Medium%20%20%20Anushka%2CKatrina%2CAlia%2CJan.mp3",
  },
  {
    title: "Pal Pal Dil Ke Pass",
    name: "Arjit Singh | Sachet-Parampara",
    source:
      "https://github.com/Varp17/MusicLove/raw/main/MusicNik/Pal%20Pal%20Dil%20Ke%20Paas-%20Title%20Track%20(feat.%20Karan%20Deol%20%D0%B8%20Sahher.mp3",
  },
  {
    title: "Tere Naina",
    name: "Shafqat Amanat Ali",
    source:
      "https://github.com/Varp17/MusicLove/raw/main/MusicNik/Tere%20Naina%20(From%20%20My%20Name%20Is%20Khan%20)%20-%20Shafqat%20Amanat%20Ali.mp3",
  },

  {
    title: "Tum Hi Ho",
    name: "Arjit Singh",
    source:
      "https://github.com/Varp17/MusicLove/raw/main/MusicNik/Tum%20Hi%20Ho%20-%20Arijit%20Singh.mp3",
  },
  {
    title: "Tum Se",
    name: "Sachin-Jigar, Raghav Chaitanya, Varun Jain",
    source:
      "https://github.com/Varp17/MusicLove/blob/main/MusicNik/Tum%20Se%20(Full%20Video)_%20Shahid%20Kapoor%2C%20Kriti%20%20Sachin-Jigar%2C%20Raghav%20Chaitanya%2C%20Varun%20Jain%2C%20Indraneel.mp3",
  },
  {
    title: "Vachindamma  | Geeta Govinda",
    name: "Gopi Sundar | Sri Mani |  Sid Sriram",
    source:
      "https://github.com/Varp17/MusicLove/raw/main/MusicNik/Vachindamma%20Full%20Video%20Song%20%20%20%20Geetha%20Govindam%20Songs%20%20%20%20Vija.mp3",
  },
  {
    title: "Zaalima",
    name: "Arjit Singh",
    source:
      "https://github.com/Varp17/MusicLove/raw/main/MusicNik/Zaalima%20-%20Arijit%20Singh%20%D0%B8%20%D0%A5%D0%B0%D1%80%D1%88%D0%B4%D0%B8%D0%BF%20%D0%9A%D0%B0%D1%83%D1%80.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});

// Inspiration: https://dribbble.com/shots/5455156-Car-HMI-assistant-Album-switching
