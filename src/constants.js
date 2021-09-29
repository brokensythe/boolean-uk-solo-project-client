export const pieceMoves = {
    "pawn": [
        { x: 0, y: 1}
    ],
    "king": [
        // forward movement
        { x: 0, y: 1},
        // backward movement
        { x: 0, y: -1},
        // move right
        { x: 1, y: 0},
        // move left
        { x: -1, y: 0},
        // forward right
        { x: 1, y: 1},
        // forward left
        { x: -1, y: 1},
        // backward left
        { x: -1, y: -1},
        // backward right
        { x: 1, y: -1}
    ],
    "knight": [
        { x: 1, y: 2},
        { x: 2, y: 1},
        { x: 2, y: -1},
        { x: 1, y: -2},
        { x: -1, y: -2},
        { x: -2, y: -1},
        { x: -2, y: 1},
        { x: -1, y: 2}
    ],
    "bishop": {
        forwardRight: [
        { x: 1, y: 1},
        { x: 2, y: 2},
        { x: 3, y: 3},
        { x: 4, y: 4},
        { x: 5, y: 5},
        { x: 6, y: 6},
        { x: 7, y: 7}],
        backwardsLeft: [
        { x: -1, y: -1},
        { x: -2, y: -2},
        { x: -3, y: -3},
        { x: -4, y: -4},
        { x: -5, y: -5},
        { x: -6, y: -6},
        { x: -7, y: -7}],
        forwardLeft: [
        { x: -1, y: 1},
        { x: -2, y: 2},
        { x: -3, y: 3},
        { x: -4, y: 4},
        { x: -5, y: 5},
        { x: -6, y: 6},
        { x: -7, y: 7}],
        backwardsRight: [
        { x: 1, y: -1},
        { x: 2, y: -2},
        { x: 3, y: -3},
        { x: 4, y: -4},
        { x: 5, y: -5},
        { x: 6, y: -6},
        { x: 7, y: -7}]
    },
    "rook": {
        straightAhead: [
        { x: 0, y: 1},
        { x: 0, y: 2},
        { x: 0, y: 3},
        { x: 0, y: 4},
        { x: 0, y: 5},
        { x: 0, y: 6},
        { x: 0, y: 7}],
        straightBack: [
        { x: 0, y: -1},
        { x: 0, y: -2},
        { x: 0, y: -3},
        { x: 0, y: -4},
        { x: 0, y: -5},
        { x: 0, y: -6},
        { x: 0, y: -7}],
        moveLeft: [
        { x: -1, y: 0},
        { x: -2, y: 0},
        { x: -3, y: 0},
        { x: -4, y: 0},
        { x: -5, y: 0},
        { x: -6, y: 0},
        { x: -7, y: 0}],
        moveRight: [
        { x: 1, y: 0},
        { x: 2, y: 0},
        { x: 3, y: 0},
        { x: 4, y: 0},
        { x: 5, y: 0},
        { x: 6, y: 0},
        { x: 7, y: 0}]
    },
    "queen": {
        forwardRight: [
        { x: 1, y: 1},
        { x: 2, y: 2},
        { x: 3, y: 3},
        { x: 4, y: 4},
        { x: 5, y: 5},
        { x: 6, y: 6},
        { x: 7, y: 7}],
        backwardsLeft: [
        { x: -1, y: -1},
        { x: -2, y: -2},
        { x: -3, y: -3},
        { x: -4, y: -4},
        { x: -5, y: -5},
        { x: -6, y: -6},
        { x: -7, y: -7}],
        forwardLeft: [
        { x: -1, y: 1},
        { x: -2, y: 2},
        { x: -3, y: 3},
        { x: -4, y: 4},
        { x: -5, y: 5},
        { x: -6, y: 6},
        { x: -7, y: 7}],
        backwardsRight: [
        { x: 1, y: -1},
        { x: 2, y: -2},
        { x: 3, y: -3},
        { x: 4, y: -4},
        { x: 5, y: -5},
        { x: 6, y: -6},
        { x: 7, y: -7}],
        straightAhead: [
        { x: 0, y: 1},
        { x: 0, y: 2},
        { x: 0, y: 3},
        { x: 0, y: 4},
        { x: 0, y: 5},
        { x: 0, y: 6},
        { x: 0, y: 7}],
        straightBack: [
        { x: 0, y: -1},
        { x: 0, y: -2},
        { x: 0, y: -3},
        { x: 0, y: -4},
        { x: 0, y: -5},
        { x: 0, y: -6},
        { x: 0, y: -7}],
        moveLeft: [
        { x: -1, y: 0},
        { x: -2, y: 0},
        { x: -3, y: 0},
        { x: -4, y: 0},
        { x: -5, y: 0},
        { x: -6, y: 0},
        { x: -7, y: 0}],
        moveRight: [
        { x: 1, y: 0},
        { x: 2, y: 0},
        { x: 3, y: 0},
        { x: 4, y: 0},
        { x: 5, y: 0},
        { x: 6, y: 0},
        { x: 7, y: 0}]
    }
}

export const fileToIndexNo = {
    "A" : 0,
    "B" : 1,
    "C" : 2,
    "D" : 3,
    "E" : 4,
    "F" : 5,
    "G" : 6,
    "H" : 7,
}

export const rankToIndexNo = {
    "1" : 7,
    "2" : 6,
    "3" : 5,
    "4" : 4,
    "5" : 3,
    "6" : 2,
    "7" : 1,
    "8" : 0
}

export const kingChecks = {
    "pawn" : [
        { x: 1, y: 1},
        { x: -1, y: 1}
    ],
    "king": [
        { x: 0, y: 1}, 
        { x: 0, y: -1},
        { x: 1, y: 0},
        { x: -1, y: 0},
        { x: 1, y: 1},
        { x: -1, y: 1},
        { x: -1, y: -1},
        { x: 1, y: -1}
    ],
    "knight": [
        { x: 1, y: 2},
        { x: 2, y: 1},
        { x: 2, y: -1},
        { x: 1, y: -2},
        { x: -1, y: -2},
        { x: -2, y: -1},
        { x: -2, y: 1},
        { x: -1, y: 2}
    ],
    "bishop": {
        forwardRight: [
        { x: 1, y: 1},
        { x: 2, y: 2},
        { x: 3, y: 3},
        { x: 4, y: 4},
        { x: 5, y: 5},
        { x: 6, y: 6},
        { x: 7, y: 7}],
        backwardsLeft: [
        { x: -1, y: -1},
        { x: -2, y: -2},
        { x: -3, y: -3},
        { x: -4, y: -4},
        { x: -5, y: -5},
        { x: -6, y: -6},
        { x: -7, y: -7}],
        forwardLeft: [
        { x: -1, y: 1},
        { x: -2, y: 2},
        { x: -3, y: 3},
        { x: -4, y: 4},
        { x: -5, y: 5},
        { x: -6, y: 6},
        { x: -7, y: 7}],
        backwardsRight: [
        { x: 1, y: -1},
        { x: 2, y: -2},
        { x: 3, y: -3},
        { x: 4, y: -4},
        { x: 5, y: -5},
        { x: 6, y: -6},
        { x: 7, y: -7}]
    },
    "rook": {
        straightAhead: [
        { x: 0, y: 1},
        { x: 0, y: 2},
        { x: 0, y: 3},
        { x: 0, y: 4},
        { x: 0, y: 5},
        { x: 0, y: 6},
        { x: 0, y: 7}],
        straightBack: [
        { x: 0, y: -1},
        { x: 0, y: -2},
        { x: 0, y: -3},
        { x: 0, y: -4},
        { x: 0, y: -5},
        { x: 0, y: -6},
        { x: 0, y: -7}],
        moveLeft: [
        { x: -1, y: 0},
        { x: -2, y: 0},
        { x: -3, y: 0},
        { x: -4, y: 0},
        { x: -5, y: 0},
        { x: -6, y: 0},
        { x: -7, y: 0}],
        moveRight: [
        { x: 1, y: 0},
        { x: 2, y: 0},
        { x: 3, y: 0},
        { x: 4, y: 0},
        { x: 5, y: 0},
        { x: 6, y: 0},
        { x: 7, y: 0}]
    },
    "queen": {
        forwardRight: [
        { x: 1, y: 1},
        { x: 2, y: 2},
        { x: 3, y: 3},
        { x: 4, y: 4},
        { x: 5, y: 5},
        { x: 6, y: 6},
        { x: 7, y: 7}],
        backwardsLeft: [
        { x: -1, y: -1},
        { x: -2, y: -2},
        { x: -3, y: -3},
        { x: -4, y: -4},
        { x: -5, y: -5},
        { x: -6, y: -6},
        { x: -7, y: -7}],
        forwardLeft: [
        { x: -1, y: 1},
        { x: -2, y: 2},
        { x: -3, y: 3},
        { x: -4, y: 4},
        { x: -5, y: 5},
        { x: -6, y: 6},
        { x: -7, y: 7}],
        backwardsRight: [
        { x: 1, y: -1},
        { x: 2, y: -2},
        { x: 3, y: -3},
        { x: 4, y: -4},
        { x: 5, y: -5},
        { x: 6, y: -6},
        { x: 7, y: -7}],
        straightAhead: [
        { x: 0, y: 1},
        { x: 0, y: 2},
        { x: 0, y: 3},
        { x: 0, y: 4},
        { x: 0, y: 5},
        { x: 0, y: 6},
        { x: 0, y: 7}],
        straightBack: [
        { x: 0, y: -1},
        { x: 0, y: -2},
        { x: 0, y: -3},
        { x: 0, y: -4},
        { x: 0, y: -5},
        { x: 0, y: -6},
        { x: 0, y: -7}],
        moveLeft: [
        { x: -1, y: 0},
        { x: -2, y: 0},
        { x: -3, y: 0},
        { x: -4, y: 0},
        { x: -5, y: 0},
        { x: -6, y: 0},
        { x: -7, y: 0}],
        moveRight: [
        { x: 1, y: 0},
        { x: 2, y: 0},
        { x: 3, y: 0},
        { x: 4, y: 0},
        { x: 5, y: 0},
        { x: 6, y: 0},
        { x: 7, y: 0}]
    }
}