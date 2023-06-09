// juguemos.html
let elementoReceptor_01 = document.querySelector("#tarjetaSupUno");
let elementoReceptor_02 = document.querySelector("#tarjetaSupDos");
let elementoReceptor_03 = document.querySelector("#tarjetaSupTres");
let elementoArrastable_01 = document.querySelector("#imagenInfUno");
let elementoArrastable_02 = document.querySelector("#imagenInfDos");
let elementoArrastable_03 = document.querySelector("#imagenInfTres");

elementoArrastable_01.addEventListener("dragstart", (event) => {
  let infoElemento = event.srcElement.attributes.src.value;
  console.log(infoElemento);
  event.dataTransfer.setData("Text", infoElemento);
  console.log(event);
});

elementoArrastable_02.addEventListener("dragstart", (event) => {
  let infoElemento = event.srcElement.attributes.src.value;
  console.log(infoElemento);
  event.dataTransfer.setData("Text", infoElemento);
  console.log(event);
});

elementoArrastable_03.addEventListener("dragstart", (event) => {
  let infoElemento = event.srcElement.attributes.src.value;
  console.log(infoElemento);
  event.dataTransfer.setData("Text", infoElemento);
  console.log(event);
});

elementoReceptor_01.addEventListener("dragover", (event) => {
  console.log("Un elemento arrastrable está dentro de la zona destino");
  event.preventDefault(); // impedir su acción por defecto
});

elementoReceptor_02.addEventListener("dragover", (event) => {
  console.log("Un elemento arrastrable está dentro de la zona destino");
  event.preventDefault(); // impedir su acción por defecto
});

elementoReceptor_03.addEventListener("dragover", (event) => {
  console.log("Un elemento arrastrable está dentro de la zona destino");
  event.preventDefault(); // impedir su acción por defecto
});

elementoReceptor_01.addEventListener("drop", (event) => {
  console.log("Un elemento arrastrable fue soltado dentro de la zona destino");
  // buscar la información que guardamos en el dataTransfer para poder mostrar al elemento dentro del destino.
  let dataObtenida = event.dataTransfer.getData("Text");
  console.log("dataObtenida");
  console.log(dataObtenida);
  // Si el Elemento arrastrado fue el rompe2.png.
  if (dataObtenida == "./img/rompe2.png") {
    elementoReceptor_01.innerHTML = `
            <img  src=${dataObtenida} alt="imagen del rompe2.png" height="400px" width="275px"/>
        `;
    elementoArrastable_02.style.display = "none";
  }
  // Si el Elemento arrastrado fue el rompe1.png.
  if (dataObtenida == "./img/rompe1.png") {
    elementoReceptor_01.innerHTML = `
                <img  src=${dataObtenida} alt="imagen del rompe1.png" height="400px" width="275px"/>
            `;
    elementoArrastable_01.style.display = "none";
  }
  // Si el Elemento arrastrado fue el rompe3.png.
  if (dataObtenida == "./img/rompe3.png") {
    elementoReceptor_01.innerHTML = `
            <img  src=${dataObtenida} alt="imagen del rompe3.png" height="400px" width="275px"/>
        `;
    elementoArrastable_03.style.display = "none";
  }
});

elementoReceptor_02.addEventListener("drop", (event) => {
  console.log("Un elemento arrastrable fue soltado dentro de la zona destino");
  // buscar la información que guardamos en el dataTransfer para poder mostrar al elemento dentro del destino.
  let dataObtenida = event.dataTransfer.getData("Text");
  console.log("dataObtenida");
  console.log(dataObtenida);
  // Si el Elemento arrastrado fue el rompe2.png.
  if (dataObtenida == "./img/rompe2.png") {
    elementoReceptor_02.innerHTML = `
              <img  src=${dataObtenida} alt="imagen del rompe2.png" height="400px" width="275px"/>
          `;
    elementoArrastable_02.style.display = "none";
  }
  // Si el Elemento arrastrado fue el rompe1.png.
  if (dataObtenida == "./img/rompe1.png") {
    elementoReceptor_02.innerHTML = `
                  <img  src=${dataObtenida} alt="imagen del rompe1.png" height="400px" width="275px"/>
              `;
    elementoArrastable_01.style.display = "none";
  }
  // Si el Elemento arrastrado fue el rompe3.png.
  if (dataObtenida == "./img/rompe3.png") {
    elementoReceptor_02.innerHTML = `
              <img  src=${dataObtenida} alt="imagen del rompe3.png" height="400px" width="275px"/>
          `;
    elementoArrastable_03.style.display = "none";
  }
});

elementoReceptor_03.addEventListener("drop", (event) => {
  console.log("Un elemento arrastrable fue soltado dentro de la zona destino");
  // buscar la información que guardamos en el dataTransfer para poder mostrar al elemento dentro del destino.
  let dataObtenida = event.dataTransfer.getData("Text");
  console.log("dataObtenida");
  console.log(dataObtenida);
  // Si el Elemento arrastrado fue el rompe2.png.
  if (dataObtenida == "./img/rompe2.png") {
    elementoReceptor_03.innerHTML = `
              <img  src=${dataObtenida} alt="imagen del rompe2.png" height="400px" width="275px"/>
          `;
    elementoArrastable_02.style.display = "none";
  }
  // Si el Elemento arrastrado fue el rompe1.png.
  if (dataObtenida == "./img/rompe1.png") {
    elementoReceptor_03.innerHTML = `
                  <img  src=${dataObtenida} alt="imagen del rompe1.png" height="400px" width="275px"/>
              `;
    elementoArrastable_01.style.display = "none";
  }
  // Si el Elemento arrastrado fue el rompe3.png.
  if (dataObtenida == "./img/rompe3.png") {
    elementoReceptor_03.innerHTML = `
              <img  src=${dataObtenida} alt="imagen del rompe3.png" height="400px" width="275px"/>
          `;
    elementoArrastable_03.style.display = "none";
  }
});

function reiniciarJuego() {
  console.log("reset");
  elementoReceptor_01.innerHTML = `<p>Arrastre y suelte la imágene aquí</p>`;
  elementoReceptor_02.innerHTML = `<p>Arrastre y suelte la imágene aquí</p>`;
  elementoReceptor_03.innerHTML = `<p>Arrastre y suelte la imágene aquí</p>`;
  elementoArrastable_01.style.display = "block";
  elementoArrastable_02.style.display = "block";
  elementoArrastable_03.style.display = "block";
}
