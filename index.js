import http from "http"
import fs from "fs"
import path from "path"

const PORT = process.env.PORT

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html"})
    res.end('<h1>Hello World!</h1>')
})
server.listen(PORT,() => {
    console.log("server is running")
})