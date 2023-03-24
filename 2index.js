let totalPoints = 0;
//this checks the speed

function checkSpeed (speed){
    if (speed <= 70 )
    return "OK"
    else {
        let totalPoints = Math.floor((carSpeed - 70) / 5);
        if(totalPoints >= 12)
    return "License suspended";
     else {
        return "This is your current point, " + totalPoints;
     }
    }
}