window.onload = inicio;
function inicio() {
  let videoplay = document.querySelector("video[id='videoHist']");
  let tiempoVisto = videoplay.currentTime;
  tiempoVisto = conversion(tiempoVisto);
  document.querySelector(
    "#instanciaVideo"
  ).innerHTML = `Tiempo Visto: ${tiempoVisto}`;
  let duracionVideo = videoplay.duration;
  if (isNaN(duracionVideo)) {
    duracionVideo = "280";
  }
  duracionVideo = Math.floor(duracionVideo);
  duracionVideo = conversion(duracionVideo);
  document.querySelector(
    "#duracionVideo"
  ).innerHTML = `Duración del Video: ${duracionVideo}`;
  videoplay.ontimeupdate = actualizarVideo;
  videoplay.onend = recargarVideo;
}

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
const sonidoVideo = () => {
  document.querySelector("video[id='videoHist']").volume =
    !document.querySelector("video[id='videoHist']").volume;
    let estadoVol = document.querySelector("#volumenSiNo").src;
    estadoVol = estadoVol.slice(-13)
    console.log(estadoVol);
    if(estadoVol == "volumenSi.svg"){
      document.querySelector("#volumenSiNo").src="./img/volumenNo.svg"
    } else {
      document.querySelector("#volumenSiNo").src="./img/volumenSi.svg"
    }
  };

function actualizarVideo() {
  let tiempoVisto = document.querySelector("video[id='videoHist']").currentTime;
  let duracion = document.querySelector("video[id='videoHist']").duration;
  tiempoVisto = conversion(tiempoVisto);

  document.querySelector(
    "#instanciaVideo"
  ).innerHTML = `Tiempo Visto: ${tiempoVisto}`;
}
// Función para cambiar convertir segundos.milis en minutos:segundos tipo XX:XX (Es llamada x Fun actualizarVideo())
function conversion(segundos) {
  let d = new Date(segundos * 1000);
  let segundo = d.getSeconds() <= 9 ? "0" + d.getSeconds() : d.getSeconds();
  let minuto = d.getMinutes() <= 9 ? "0" + d.getMinutes() : d.getMinutes;
  return `${minuto}:${segundo}`;
}

