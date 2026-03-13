let selectedPieces = null;
let board = document.getElementById('board');

let pieces = {
    black: [
        "https://upload.wikimedia.org/wikipedia/commons/1/11/BLACK_CHESS_ROOK.svg",
        "https://upload.wikimedia.org/wikipedia/commons/7/70/BLACK_CHESS_KNIGHT.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/19/BLACK_CHESS_BISHOP.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/BLACK_CHESS_QUEEN.svg",
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/BLACK_CHESS_KING.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/19/BLACK_CHESS_BISHOP.svg",
        "https://upload.wikimedia.org/wikipedia/commons/7/70/BLACK_CHESS_KNIGHT.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/11/BLACK_CHESS_ROOK.svg"],

    blackP: "https://upload.wikimedia.org/wikipedia/commons/5/55/BLACK_CHESS_PAWN.svg",

    white: [
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/WHITE_CHESS_ROOK.svg",
        "https://upload.wikimedia.org/wikipedia/commons/3/34/WHITE_CHESS_KNIGHT.svg",
        "https://upload.wikimedia.org/wikipedia/commons/5/52/White_Bishop_Xogos_da_Meiga_chess_icons_family.svg",
        "https://upload.wikimedia.org/wikipedia/commons/e/ee/WHITE_CHESS_QUEEN.svg",
        "https://upload.wikimedia.org/wikipedia/commons/9/9f/WHITE_CHESS_KING.svg",
        "https://upload.wikimedia.org/wikipedia/commons/5/52/White_Bishop_Xogos_da_Meiga_chess_icons_family.svg",
        "https://upload.wikimedia.org/wikipedia/commons/3/34/WHITE_CHESS_KNIGHT.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/WHITE_CHESS_ROOK.svg"

    ],
    whiteP: "https://upload.wikimedia.org/wikipedia/commons/4/40/WHITE_CHESS_PAWN.svg"

};

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {

        let squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        squareDiv.dataset.row = row;
        squareDiv.dataset.col = col;

        // pieces sitting
        if ((row + col) % 2 === 0) {
            squareDiv.classList.add("white");

        } else {
            squareDiv.classList.add("black")
        };

        if (row === 0) {

            squareDiv.innerHTML = `<img  src="${pieces.black[col]}" class="pieces">`
        } else if (row === 1) {
            squareDiv.innerHTML = `<img  src="${pieces.blackP}" class="pieces">`
        } else if (row === 6) {
            squareDiv.innerHTML = `<img  src="${pieces.whiteP}" class="pieces">`
        } else if (row === 7) {
            squareDiv.innerHTML = `<img  src="${pieces.white[col]}" class="pieces">`
        };



        // access the div

        squareDiv.addEventListener("click", function () {
            // console.log("row No " + row);
            // console.log("col No  " + col);
            let piece = this.querySelector(".pieces");

            if (piece) {
                if (selectedPieces) {
                    selectedPieces.classList.remove("selected");
                };

                selectedPieces = piece;
                piece.classList.add("selected");
                return;
            };

            if (selectedPieces) {
                this.appendChild(selectedPieces);
                selectedPieces.classList.remove("selected");
                selectedPieces = null;
            }
        });


        board.appendChild(squareDiv);
    };
};


