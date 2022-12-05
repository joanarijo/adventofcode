let fs = require("fs");
let rounds = fs.readFileSync('input.txt', 'utf8').split('\n');

// A beats Z beats B beats X beats C beats Y beats A
// C beats B beats A beats C

let scoreMap = [
    {
        "plays": "A, X",
        "score": 1
    },
    {
        "plays": "B, Y",
        "score": 2
    },
    {
        "plays": "C, Z",
        "score": 3
    }
];

let finalScore = roundScore = me = opponent = 0;

for (let i = 0; i < rounds.length; i++) {
    me = rounds[i][2];
    opponent = rounds[i][0];

    scoreMap.map(object =>  {
        if (object.plays.includes(me)) {
            myPlay = object.score;
            roundScore += object.score;
        }
        if (object.plays.includes(opponent)) {
            opponentPlay = object.score;
        }
    });

    if ((myPlay - opponentPlay) == 0) {
        roundScore += 3;
    }
    else if((opponentPlay % 3) == (myPlay - 1)) {
        roundScore += 6;
    }
    else {
        roundScore += 0;
    }
    finalScore = roundScore;
}

console.log("final score: ", finalScore);
