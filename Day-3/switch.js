
// Using Switch Statements
// This will log role of the person based on the conditions set
let role = 'adminstrator';
switch (role){
    case 'guest':
        console.log("Guest User");
        break;
    case 'moderator':
        console.log("Moderator User");
        break;
    case 'adminstrator':
        console.log("Adminstator");
        break;
    default:
        console.log('Unknown User');
}