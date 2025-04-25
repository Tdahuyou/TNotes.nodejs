const fs = require('fs').promises
const http = require('http')
const path = require('path')

const PORT = 23523

http
  .createServer(async (request, response) => {
    let filePath
    let contentType

    if (request.url === '/image') {
      filePath = path.join(__dirname, '1.png')
      contentType = 'image/png'
    } else if (request.url === '/video') {
      filePath = path.join(__dirname, '1.mp4')
      contentType = 'video/mpeg4'
    } else {
      response.writeHead(404, { 'Content-Type': 'text/plain' })
      response.end('Not Found')
      return
    }

    try {
      const data = await fs.readFile(filePath)
      response.writeHead(200, { 'Content-Type': contentType })
      response.end(data)
    } catch (error) {
      response.writeHead(500, { 'Content-Type': 'text/plain' })
      response.end('Internal Server Error')
      console.error(error)
    }
  })
  .listen(PORT, () => {
    console.log(`服务器监听位置是 http://127.0.0.1:${PORT}`)
  })

// 写该 demo 的日期：2025年4月25日
