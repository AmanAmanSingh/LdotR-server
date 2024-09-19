const http = require("http");


const handleRequest = (req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hello, World!");
    }
};

const server = http.createServer(handleRequest)

module.exports = server;

