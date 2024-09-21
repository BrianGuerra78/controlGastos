let listaNombreGastos = [];
let listaValorGastos = [];

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    // Validación de datos
    if (!nombreGasto || !valorGasto || isNaN(valorGasto)) {
        alert('Por favor, ingresa un nombre de gasto y un valor numérico válido.');
        return;
    }

    listaNombreGastos.push(nombreGasto);
    listaValorGastos.push(valorGasto);

    actualizarListaDeGastos();
}

function actualizarListaDeGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const listaTotalGastos = document.getElementById('totalGastos');
    let htmlListta = '';
    let totalGastos = 0;

    listaNombreGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValorGastos[posicion]);
        htmlListta += `<li>${elemento} - USD ${valorGasto.toFixed(2)}
      <button onclick="eliminarGasto(${posicion});">Eliminar</button>
      </li>`;
        totalGastos += Number(valorGasto);
    });

    listaElementos.innerHTML = htmlListta;
    listaTotalGastos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion) {
    if (confirm('¿Estás seguro de que deseas eliminar este gasto?')) {
        listaNombreGastos.splice(posicion, 1);
        listaValorGastos.splice(posicion, 1);
        actualizarListaDeGastos();
    }
}