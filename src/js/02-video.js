const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const throttle = require('lodash.throttle');

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('play', onPlay);
player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000),
);

document.addEventListener('DOMContentLoaded', () => {
  let seconds = localStorage.getItem('videoplayer-current-time');
  player
    .setCurrentTime(seconds)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          alert('RangeError');
          break;
        default:
          break;
      }
    });
});
