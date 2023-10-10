

speedChecker(73);

function speedChecker(speed){
    const speedLimit = 70;
    const maxDistance = 5;
    if (speed + maxDistance < speedLimit) {
        console.log("OK");
        return;
    }
    const point = Math.floor(((speed - speedLimit)) / maxDistance)
    console.log("Point:", point);
    if (point >= 12) {
        console.log("Licence Suspended");
    }
    }
 