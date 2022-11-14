const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("Welcome to the jungle (homepage)")
    }
    else if(req.url === "/about") {
        res.end("My name is ignacio rubio montiel")
    }
    else {
        res.end(`<h1>404 not found my top g</h1>
        <a href="/">go back!!!</a>`)
    }
})

server.listen(5000)