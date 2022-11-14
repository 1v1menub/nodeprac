const path = require("path")

console.log(path.sep)

const filePath = path.join("textfiles", "lol.txt")
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, "textfiles", "lol.txt")
console.log(absolute)