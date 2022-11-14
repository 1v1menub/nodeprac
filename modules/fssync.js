const fs = require("fs")

const first = fs.readFileSync("./textfiles/first.txt", "utf8")
const second = fs.readFileSync("./textfiles/second.txt", "utf8")

console.log(first, "\n", second)

fs.writeFileSync("./textfiles/result.txt", `First file: ${first} \nSecond file: ${second} `, {flag: "a"})