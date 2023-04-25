const reproducirVideo = () => {
  let videoplay = document.querySelector("video[id='videoHist']");
  videoplay.play();
};

const recargarVideo = () => {
  let videoplay = document.querySelector("video[id='videoHist']");
  videoplay.load();
};

const pausarVideo = () => {
  let videoplay = document.querySelector("video[id='videoHist']");
  videoplay.pause();
};
