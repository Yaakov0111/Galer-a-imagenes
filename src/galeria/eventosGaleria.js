import cerrarGaleria from "./cerrarGaleria";
import slideClick from "./slideClick";
import { cargarAnteriorSiguiente } from "./cargarImagen";
import carousel from "./carousel";

const galeria = document.getElementById("galeria");
galeria.addEventListener("click", (e) => {
  const boton = e.target.closest("button");

  if (boton?.dataset?.accion === "cerrar-galeria") {
    cerrarGaleria();
  }

  if (e.target.dataset.id) {
    slideClick(e);
  }
  // SIGUIENTE IMAGEN
  if (boton?.dataset?.accion === "siguiente-imagen") {
    cargarAnteriorSiguiente("siguiente");
  }

  // ANTERIOR IMAGEN
  if (boton?.dataset?.accion === "anterior-imagen") {
    cargarAnteriorSiguiente("anterior");
  }

  // Carousel Adelante
  if (boton?.dataset?.accion === "siguiente-slide") {
    carousel("adelante");
  }

  // Carousel Atras
  if (boton?.dataset?.accion === "anterior-slide") {
    carousel("atras");
  }
});
