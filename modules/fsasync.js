const { readFile, writeFile, write } = require("fs")

readFile("./textfiles/first.txt", "utf8", (err, result) => {
    if(err) {
        console.log(err)
        return;
    }
    const first = result
    readFile("./textfiles/second.txt", "utf8", (err, result) => {
        if(err) {
            console.log(err)
            return;
        }
        const second = result
        writeFile("./textfiles/asyncresult.txt", `First: ${first}\nSecond: ${second}`, (err, result) => {
            
        })
    })
})