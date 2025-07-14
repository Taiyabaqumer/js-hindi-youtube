const accountId = 144553
let accountEmail = "taiyaba@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 22 // not allowed

accountEmail ="ta@sa.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in blocks scope and functional scope
*/

console.table([accountId,accountEmail, accountPassword,accountCity,accountState])
