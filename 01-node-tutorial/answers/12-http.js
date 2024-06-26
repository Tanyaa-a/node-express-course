const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    
else if (req.url === '/about') {
    res.end('About our project')
} else {
    res.end(`
    <p>Opps! No page found</p>
    <a href="/">back home</a>
    `)
}
   
})
server.listen(3000)