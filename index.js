'use strict'

const resultDiv = document.getElementById('result')

function generarNombreUsuario() {
    const sustantivo = sustantivos[Math.floor(Math.random() * sustantivos.length)];
    const adjetivo = adjetivos[Math.floor(Math.random() * adjetivos.length)];
    const accion = acciones[Math.floor(Math.random() * acciones.length)];
    
    resultDiv.innerHTML = `<div class="resultDisplay">
                            <p>El teu seudonim és:</p>
                            <br>
                            <h3>${sustantivo}${adjetivo}${accion} </h3>
                            </div>`
}