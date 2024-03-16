const accountId = 14453
let accountEmail = "arvin@gamil.com"
var accountPass = "12345"
accountCity = "karachi"

// accountId = 2; Not allowed

accountEmail = "arvin@google.com"
accountPass = "123"
accountCity = "daharki"

console.table([accountId, accountEmail, accountPass, accountCity]);

/**
 Prefer not to use var
 baecuase of issue in block scope & functional scope
 */