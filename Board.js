
let board = document.getElementById('board');

for (let row = 1; row <= 8; row++) {
    for (let col = 1; col <= 8; col++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        if ((row + col) % 2 === 0) {
            squareDiv.classList.add("white");

        } else {
            squareDiv.classList.add("black")
        };
        board.appendChild(squareDiv);
    };
};


