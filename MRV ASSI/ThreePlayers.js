const players = [
    { name: 'Player1', team: 'TeamA', runs: 450 },
    { name: 'Player2', team: 'TeamB', runs: 350 },
    { name: 'Player3', team: 'TeamC', runs: 500 },
    { name: 'Player4', team: 'TeamA', runs: 200 },
    { name: 'Player5', team: 'TeamB', runs: 150 },
    { name: 'Player6', team: 'TeamC', runs: 600 },
    { name: 'Player7', team: 'TeamA', runs: 550 },
    { name: 'Player8', team: 'TeamB', runs: 400 },
    { name: 'Player9', team: 'TeamC', runs: 300 }
];
const scores=[];
const topThree=[]
const resScores=[]
function topScores(players){
    for(let items of players ){
        scores.push(items.runs)
        scores.sort()
    }
    console.log(scores)
    topThree.push(scores[scores.length-1])
    topThree.push(scores[scores.length-2])
    topThree.push(scores[scores.length-3])
    for(let score of topThree){
        for(let items of players){
            if(score==items.runs){
                resScores.push(items)
            }
        }
        
    }
    return resScores
}
console.log(topScores(players));
