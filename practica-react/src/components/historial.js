let historial = ["", "", "", ""];
let indice = 0;

export function BorrarHistorial() {
    historial = [];

}

export function GuardarHistorial(valor) {
    historial[indice] = valor; // Agrega la palabra en la posición actual
    indice = (indice + 1) % 4; // Avanza el índice circularmente (0, 1, 2, 3, 0, 1, 2, ...)
}



export function ObtenerHistorial() {
    return historial;
}