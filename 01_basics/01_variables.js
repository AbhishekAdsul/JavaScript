const accountId = 144553
let accountEmail = "abhishekvadsul@gmail.com"

var accountPassword = "12345"
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
accountCity = "Koregaon"

let accountState;

accountEmail = "hello@gmail.com"

accountPassword ="12121212"

accountCity = "pune"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])