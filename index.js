var localStream = null;

var streamConstraints = { audio: true, video: true }; // Запрашиваем доступ и к аудио, и к видео

var streamConstraints = {
  audio: true,
  video: {
    mandatory: { maxWidth: "320", maxHeight: "240", maxFrameRate: "5" },
    optional: [],
  },
};

function getUserMedia_success(stream) {
  let video = document.querySelector('#localVideo1')
  console.log("getUserMedia_success():", stream);
  video.srcObject = stream; // Подключаем медиапоток к HTML-элементу <video>
  localStream = stream; // и сохраняем в глобальной переменной для дальнейшего использования
}

function getUserMedia_error(error) {
  console.log("getUserMedia_error():", error);
}

function getUserMedia_click() {
  console.log("getUserMedia_click()");
  navigator.mozGetUserMedia(
    streamConstraints,
    getUserMedia_success,
    getUserMedia_error
  );
}
