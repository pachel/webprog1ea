function loadCalculator() {
    ReactDOM.render(<Calculator />, document.getElementById('app'));
}

function loadTicTacToe() {
    ReactDOM.render(<TicTacToe />, document.getElementById('app'));
}

// Alapértelmezett alkalmazás betöltése
loadCalculator();