
// let gameTeams = {}

function gameObject() {
    return gameTeams = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                "Alan Anderson":{
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans":{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez":{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee":{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry":{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien":{
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo":{
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop":{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon":{
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                }
            }
            }
        }
// let gameTeams = {}

function gameObject() {
    return gameTeams = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                "Alan Anderson":{
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans":{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez":{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee":{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry":{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien":{
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo":{
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop":{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon":{
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood":{
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

const data = gameObject();
const {home, away} = data
const homePlayers = home.players;
const awayPlayers = away.players;
const allPlayers = {...homePlayers, ...awayPlayers}
// console.log(allPlayers)

function numPointsScored (inputName) {
    for (let playerKey in allPlayers){ //-> this returns every player's name
        // console.log(playerKey);
        if (inputName === playerKey) { //-> this checks if the inputname is the players name
            let result = allPlayers[inputName].points;
            // console.log(result);
            return result
        }
    }
}
// console.log(numPointsScored("Jeff Adrien"))

function shoeSize (inputName){
    for (let alibi in allPlayers) {
        if (alibi === inputName) {
            return allPlayers[inputName].shoe
        }
    }
}
// console.log(shoeSize('Jeff Adrien'))

function teamColors (inputTeam) {
    const teamNameOne = home.teamName
    const teamNameTwo = away.teamName   

    if (inputTeam === teamNameOne) {
        return away.colors 
    } else if (inputTeam === teamNameTwo) {
        return home.colors
    } else {
        return 
    }
}

// console.log(teamColors("Charlotte Hornets"));

function teamNames () {
    let teamNameArray = []
    for (let gameKey in data) {
        teamNameArray.push(data[gameKey].teamName);
    }
    return teamNameArray
}

// console.log(teamNames());

function playerNumbers(inputTeam){
    let teamKeyHolder = [] //-> declare key holder for indexing the team object
    let teamNumberHolder = [] //-> delcaring an array to store result

    switch (inputTeam) {

    case ("Brooklyn Nets") :
        for (let teamKey in home){ //-> iterates through home obj
            teamKeyHolder.push(teamKey) //-> returns 3 keys in home obj
            let playerKey = home[teamKeyHolder[2]] //-> goes into home.players
            for (let player in playerKey ) { //iterates through home.players
                const number = playerKey[player].number; //-> decalres each players' number
                teamNumberHolder.push(number); //--> stores player number in results array
            }
        }
        break;

    case ("Charlotte Hornets") :
        for (let teamKey in away){
            teamKeyHolder.push(teamKey)
            let playerKey = away[teamKeyHolder[2]]
            for (let player in playerKey ) {
                const number = playerKey[player].number;
                teamNumberHolder.push(number);
            }
        }
        break;

        default:
            return "no such team";
    }
    return teamNumberHolder;
}

// console.log(playerNumbers("Charlotte Hornets"))

function playerStats(inputName) {
    for (let playerKey in allPlayers) {
        if (inputName === playerKey) {
            return allPlayers[inputName]
        }
    }
}

// console.log(playerStats("Jeff Adrien"))

function bigShoeRebounds() {
    let shoeSizeHolder = [] //-> create array to hold shoe sizes
    let largestShoeSize; //-> placeholder for largest shoe size
    for (let allPlayerKey in allPlayers) { //-> iterate all the player lists
        let playerKey = allPlayers[allPlayerKey]; //-> declare player information
        shoeSizeHolder.push(playerKey.shoe);//-> add each player's shoe size to the array
    }
    largestShoeSize = Math.max(...shoeSizeHolder) //-> finds largest shoe size
    const maxNumber = shoeSizeHolder.indexOf(largestShoeSize); //-> finds the index of the largest shoe size
    const entries = Object.entries(allPlayers); //-> converst allPlayers obj into array so we can retrieve the [3] index
    const results = entries[maxNumber][1] //-> extracting the info obj of the 4th player from an array
    return results.rebounds //-> returns the rebounds for the 4th player
}

console.log(bigShoeRebounds())

//iterate through player ojb
// => find shoe size array 
// => find index of largest shoe size 
// => find rebounds associated with index
    