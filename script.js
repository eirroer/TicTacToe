const boardX = [[false, false, false], [false, false, false], [false, false, false]]
const boardO = [[false, false, false], [false, false, false], [false, false, false]]

var turnX = true
var gameWon = false
var moves = 0

function markBox(id) {
    //console.log(turnX, moves)
    
    if (moves >= 9) return
    if (gameWon == true) return
    
    if (turnX == true){
        markBoxX(id)
        turnX = false
        convertIdToIndex(id, boardX)
        gameWon = isWon(boardX)
        if (gameWon == true) window.alert("X Won!")
    } else {
        markBoxO(id)
        turnX = true
        convertIdToIndex(id, boardO)
        gameWon = isWon(boardO)
        if (gameWon == true) window.alert("O Won!")
    }

}


function markBoxX(id){
    btnText = document.getElementById(id).innerText
    if (btnText == ""){
        document.getElementById(id).style.color = 'black'
        document.getElementById(id).innerText = "X"
        moves++
    }
}

function markBoxO(id){
    btnText = document.getElementById(id).innerText
    if (btnText == "") {
        document.getElementById(id).style.color = 'black'
        document.getElementById(id).innerText = "O"
        moves++
    }
}

function isWon(board){

    console.log(board)
    if (moves < 5) return false

    //diagonal
    if (board[0][0] == true && board[1][1] == true && board[2][2] == true) return true
    if (board[0][2] == true && board[1][1] == true && board[2][0] == true) return true

    for (let i = 0; i < 4; i++){
        //horizontal
        if (board[i][0] == true && board[i][1] == true && board[i][2] == true) return true
        //vertical
        if (board[0][i] == true && board[1][i] == true && board[2][i] == true) return true
    }

    return false
}

function convertIdToIndex(id, board){
    if (id <= 3) return board[0][parseInt(id) - 1] = true
    if (id <= 6) return board[1][parseInt(id) - 1 - 3] = true
    if (id <= 9) return board[2][parseInt(id) - 1 - 6] = true
}
