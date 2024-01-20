import dataCategorias from "./datos/categorias";
const { categorias } = dataCategorias;
const contenedorCategorias = document.getElementById("categorias");

categorias.forEach((categoria) => {
  const nueevaCategoria = document.createElement("a");
  const plantilla = `
        <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
		<div class="categoria__datos">
		    <p class="categoria__nombre">${categoria.nombre}</p>
	        <p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
        </div>
    `;

  nueevaCategoria.innerHTML = plantilla;
  nueevaCategoria.classList.add("categoria");
  nueevaCategoria.href = "#";
  nueevaCategoria.dataset.categoria = categoria.id;

  contenedorCategorias.append(nueevaCategoria);
});
