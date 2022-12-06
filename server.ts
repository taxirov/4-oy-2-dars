import http from 'http'

const pupils: string = `
John Doe (90) 578 92 04
`
function handler(message: http.IncomingMessage, response: http.ServerResponse){
    console.log(message.method + ' ' + message.url + ' ' + message.httpVersion);
    console.log(message.rawHeaders);

    const buffer = Buffer.from(pupils, 'utf-8')
    let contentType: string = 'text/plain'
    let contentLength: number = buffer.byteLength
    
    response.writeHead(200, 'OK', [
        'Content-Type', contentType,
        'Content-Length', contentLength
    ])
    response.write(buffer)
    response.end()
}

const server = http.createServer(handler)

server.listen(8090, 'localhost', () => {
    console.log('Server is running on port: 8080');
    
})