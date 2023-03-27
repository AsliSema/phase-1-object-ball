function gameObject(){
    const game = {
        home:{
            teamName: "Brooklyn Nets",
            color: ["Black", "White"],
            players:{
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,   
                    "points": 22, 
                    "rebounds": 12,   
                    "assists": 12,
                    "steals": 3, 
                    "blocks": 1, 
                    "slamDunks": 1  
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,   
                    "points": 12, 
                    "rebounds": 12,   
                    "assists": 12,
                    "steals": 12, 
                    "blocks": 12, 
                    "slamDunks": 7 
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,   
                    "points": 17, 
                    "rebounds": 19,   
                    "assists": 10,
                    "steals": 3, 
                    "blocks": 1, 
                    "slamDunks": 15 
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,   
                    "points": 26, 
                    "rebounds": 12,   
                    "assists": 6,
                    "steals": 3, 
                    "blocks": 8, 
                    "slamDunks": 5 
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,   
                    "points": 19, 
                    "rebounds": 2,   
                    "assists": 2,
                    "steals": 4, 
                    "blocks": 11, 
                    "slamDunks": 1
                }
            }
        },
        away:{
            teamName: "Charlotte Hornets",
            color: ["Turquoise", "Purple"],
            players:{
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,   
                    "points": 10, 
                    "rebounds": 1,   
                    "assists": 1,
                    "steals": 2, 
                    "blocks": 7, 
                    "slamDunks": 2  
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,   
                    "points": 12, 
                    "rebounds": 4,   
                    "assists": 7,
                    "steals": 7, 
                    "blocks": 15, 
                    "slamDunks": 10 
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,   
                    "points": 24, 
                    "rebounds": 12,   
                    "assists": 12,
                    "steals": 4, 
                    "blocks": 5, 
                    "slamDunks": 5 
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,   
                    "points": 33, 
                    "rebounds": 3,   
                    "assists": 2,
                    "steals": 1, 
                    "blocks": 1, 
                    "slamDunks": 0 
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,   
                    "points": 6, 
                    "rebounds": 12,   
                    "assists": 12,
                    "steals": 22, 
                    "blocks": 5, 
                    "slamDunks": 12
                }
            }
        }
    }
    return game
}

function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
}

function homeTeamName(){
    return gameObject()['home']['teamName']
}

function numPointsScored(name){
    let homeOrAway = 'home'
    const innerObj = gameObject().home.players;
    if(!Object.keys(innerObj).includes(name)){
        homeOrAway = 'away'
    }
    return `${name} has ${gameObject()[homeOrAway]['players'][name]['points']} points`
}

function shoeSize(name){
    let homeOrAway = 'home'
    const innerObj = gameObject().home.players;
    if(!Object.keys(innerObj).includes(name)){
        homeOrAway = 'away'
    }
    return `${name}'s shoe number is ${gameObject()[homeOrAway]['players'][name]['shoe']}`
}

function teamColors(teamName){
    let homeOrAway = 'home'
    const obj = gameObject().home.teamName;
    if(obj !== teamName){
        homeOrAway = "away"
    }
    return `${teamName}'s team colors are ${gameObject()[homeOrAway].color}`
}

function teamNames(){
    return [gameObject().home.teamName, gameObject().away.teamName]
}

function playerNumbers(teamName){
    let homeOrAway = "home";
    const obj = gameObject().home.teamName;
    if(obj !== teamName){
        homeOrAway = "away"
    }
    let teamNumbers = [];
    for(value in gameObject()[homeOrAway]["players"]){
        let number = Object.values(gameObject()[homeOrAway]["players"][value])[0]
        teamNumbers.push(number)
    }
    return teamNumbers 
}

function playerStats(name){
    let homeOrAway = 'home'
    const innerObj = gameObject().home.players;
    if(!Object.keys(innerObj).includes(name)){
        homeOrAway = 'away'
    }
    return gameObject()[homeOrAway]['players'][name]
}

function bigShoeRebounds(teamName){
    let shoeArr = [];
    let reboundsArr=[];
    let homeOrAway = "home";
    const obj = gameObject().home.teamName;
    if(obj !== teamName){
        homeOrAway = "away"
    }
    for (key in gameObject()[homeOrAway]["players"]){
        let shoe = Object.values(gameObject()[homeOrAway]["players"][key])[1];
        let rebounds = Object.values(gameObject()[homeOrAway]["players"][key])[3];
        shoeArr.push(shoe)
        reboundsArr.push(rebounds)
    }
    const arrayOfObject = shoeArr.map((shoe, index)=>({ shoe: shoe, rebounds:reboundsArr[index]}))
    const indexOfMaxShoe = shoeArr.indexOf(Math.max(...shoeArr))
    return arrayOfObject[indexOfMaxShoe]
}

//Bonus Questions

function mostPointsScored(teamName){
    const obj = gameObject().home.teamName;
    let homeOrAway = "home";
    if(obj !== teamName){
        homeOrAway = "away"
    }
    const playerNames = Object.keys(gameObject()[homeOrAway]["players"])
    const playerPoints = [];
    for (key in gameObject()[homeOrAway]["players"]){
        let points = Object.values(gameObject()[homeOrAway]["players"][key])[2];
        playerPoints.push(points)
    }
    const pointsWithPlayer = playerNames.map((name, index)=>({playerName: name, points: playerPoints[index]}))
    const indexOfMaxPoints = playerPoints.indexOf(Math.max(...playerPoints))

    return pointsWithPlayer[indexOfMaxPoints]
}

function winningTeam(){
    const homePoints = [];
    const awayPoints = [];
    let totalPointsHome = 0;
    let totalPointsAway = 0;
    for (key in gameObject()["home"]["players"]){
        let homePoint = Object.values(gameObject()["home"]["players"][key])[2];
        homePoints.push(homePoint)
    }

    for (key in gameObject()["away"]["players"]){
        let awatPoint = Object.values(gameObject()["away"]["players"][key])[2];
        awayPoints.push(awatPoint)
    }

    homePoints.forEach(point => totalPointsHome += point);
    awayPoints.forEach(point => totalPointsAway += point);

    if(totalPointsHome > totalPointsAway){
        return `Winner: ${gameObject()["home"]["teamName"]}, Total Point: ${totalPointsHome}`
    }

    return `Winner: ${gameObject()["away"]["teamName"]}, Total Point: ${totalPointsAway}`
}

function playerWithLongestName(){
    const sortedHomePlayers = Object.keys(gameObject()["home"]["players"]).sort((firstElement, secondElement)=>{
        return secondElement.length - firstElement.length
    })
    const sortedAwayPlayers = Object.keys(gameObject()["away"]["players"]).sort((firstElement, secondElement)=>{
        return secondElement.length - firstElement.length
    })

    if(sortedHomePlayers[0].length > sortedAwayPlayers[0].length){
        return sortedHomePlayers[0]
    } 
    return sortedAwayPlayers[0]
}

//Super Bonus

function doesLongNameStealATon(){
    const homeSteals = [];
    const awaySteals = [];
    const longestName = playerWithLongestName();
    let isMostSteal;
    
    for (key in gameObject()["home"]["players"]){
        let homeSteal = Object.values(gameObject()["home"]["players"][key])[5];
        homeSteals.push(homeSteal)
    }
    for (key in gameObject()["away"]["players"]){
        let awaySteal = Object.values(gameObject()["away"]["players"][key])[5];
        awaySteals.push(awaySteal)
    }
    const playerNamesHome = Object.keys(gameObject()["home"]["players"])
    const playerNamesAway = Object.keys(gameObject()["away"]["players"])
    const newArrNames = playerNamesHome.concat(playerNamesAway)
    const newArrSteals = homeSteals.concat(awaySteals)
    const maxSteal = Math.max(...newArrSteals)
    const stealsWithNames = newArrNames.map((name, index)=> ({Name: name, Steals: newArrSteals[index]}))

    const filterMaxName = stealsWithNames.filter(item => item.Steals >= maxSteal)

    filterMaxName.forEach(item => {
        if(item.Name === longestName){
            isMostSteal = true;
        }else{
            isMostSteal = false;
        }
    })

    return isMostSteal
}

//console.log(homeTeamName())
//console.log(gameObject());
console.log(numPointsScored("Ben Gordon"))
console.log(shoeSize("Ben Gordon"))
console.log(teamColors("Brooklyn Nets"))
console.log(teamNames())
console.log(playerNumbers("Brooklyn Nets")) 
console.log(playerStats("Ben Gordon"))
console.log(bigShoeRebounds("Charlotte Hornets"))
console.log(mostPointsScored("Brooklyn Nets"))
console.log(winningTeam())
console.log(playerWithLongestName())
console.log( doesLongNameStealATon())