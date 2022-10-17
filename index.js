const http = require('http')
const path = require('path')
const fs = require('fs')
const port = 4000

const server = http.createServer((req,res)=>{
    //console.log('request was made: ' + req.url)
    res.writeHead(200, {'Content-Type': 'text/html'})
    //let myReadStream = fs.createReadStream(__dirname + '/public/index.html', 'utf8')
    //myReadStream.pipe(res)
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/public/index.html', 'utf8').pipe(res)
    }else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/public/contact.html', 'utf8').pipe(res)
    }else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/public/about.html', 'utf8').pipe(res)
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/public/404.html', 'utf8').pipe(res)
    }
})

server.listen(port,()=>{
    console.log(`listening to port ${port}`)
})