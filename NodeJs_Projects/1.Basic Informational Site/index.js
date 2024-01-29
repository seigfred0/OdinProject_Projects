const http = require('http');
const { URL } = require('url');
const fs = require('fs');
const { error } = require('console');

http.createServer((req, res) => {
    let url = req.url;
    let route = new URL(url, 'http://localhost:8080');
    let filename = '.' + route.pathname;

    fs.readFile(filename, (error, data) => {
        if (error) {
            fs.readFile('404.html', (err, data) => {
                if(err) {
                    res.writeHead(404, { 'Content-Type' : 'text/html' });
                    res.write('404 Not Found');
                    return res.end();
                }
                res.writeHead(404, { 'Content-Type' : 'text/html' });
                res.write(data);
                return res.end();
            });
        } else {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(data);
            return res.end();
        }
    })
}).listen(8080)