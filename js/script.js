// Consegna L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.





const playBtn = document.getElementById('play');

playBtn.addEventListener("click", function() {

    play();


})


// funzione che si attiva con il pulsante play
function play(){
    
    document.querySelector('.container').innerHTML = '';

    // salvo il valore scelto dall'utente in una variabile
    const level = document.getElementById('game-level').value;

    let cellsNumber;
    let horizontalCells; 
    const bombsNumber = 16;

    switch(level) {
        case 'easy':
            cellsNumber = 100;
            break;
        case 'medium':
            cellsNumber = 81;
            break;
        case 'expert':
            cellsNumber = 49;
    }


    createBombs();



    // funzione per creare le bombe
    function createBombs() {
        const bombsArray = [];

        while(bombsArray.length < bombsNumber) {
            const randomNum = createRandomNum(1,cellsNumber);

            if(!bombsArray.includes(randomNum)) {
                bombsArray.push(randomNum);
            }
            
        }
        return bombsArray;
    }



    // funzione per creare un numero random
    function createRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    horizontalCells = Math.sqrt(cellsNumber);

    appendSquare();



    // funzione per inserire i nodi nel container
    function appendSquare() {
        const container = document.querySelector('.container');

        for (let i = 1; i <= cellsNumber; i++) { 
            const nodo = createSquare(i);

            nodo.addEventListener("click", function() {
                this.classList.add('selected');
            })

            container.appendChild(nodo);
        }
    }

    

    // funzione per creare un nodo
    function createSquare(num) {
        const size = `calc(100% / ${horizontalCells})`;
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = size;
        square.style.height = size;

        square.innerHTML = num;

        return square;
    }

    
}