const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        res.end('Home Page');
    }
    else if (req.url === '/admin') {
        res.end('Admin Page');
    }
    else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});

server.listen(port, () => {
    console.log('Server is running');
});