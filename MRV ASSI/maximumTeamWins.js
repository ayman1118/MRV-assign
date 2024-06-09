const players = [
    { name: 'Player1', team: 'TeamA', runs: 450 , wins:10},
    { name: 'Player2', team: 'TeamB', runs: 350 , wins:9},
    { name: 'Player3', team: 'TeamC', runs: 500 , wins:8},
    { name: 'Player4', team: 'TeamA', runs: 200 , wins:7},
    { name: 'Player5', team: 'TeamB', runs: 150 , wins:11},
    { name: 'Player6', team: 'TeamC', runs: 600 , wins:6},
    { name: 'Player7', team: 'TeamA', runs: 550 , wins:5},
    { name: 'Player8', team: 'TeamB', runs: 400 , wins:4},
    { name: 'Player9', team: 'TeamC', runs: 300 , wins:3}
];
teamWins=[];
function maxWins(palyers){
    for(let items of players ){
        teamWins.push(items.wins)
    }
    teamWins.sort((a, b) => a - b);
    let maxWins=teamWins[teamWins.length-1]
    for(let items of players ){
        if(items.wins==maxWins){
            return items;
        }
    }
}

let teamWithMaxWins=maxWins(players)
console.log(teamWithMaxWins)