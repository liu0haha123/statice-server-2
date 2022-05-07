const fs = require("fs")

const userString = fs.readFileSync("./db/users.json")
const userArray = JSON.parse(userString)

const user3 = {id:3,name:"tom",password:"mm"}
userArray.push(user3)

fs.writeFileSync("./db/users.json",JSON.stringify(userArray))