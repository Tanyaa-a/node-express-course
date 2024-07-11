const { createReadStream } = require('fs')

const stream = createReadStream('../content/big.txt',  { encoding: 'utf8', highWaterMark: 200 })
let chunkCounter = 0

//Handle the data result
stream.on('data', (result) => {
    chunkCounter ++
    console.log(`total chunks ${result}`)
})

// Handle the 'end' event
stream.on('end', () => {
    console.log(`Stream ended. Total chunks received: ${chunkCounter}`);
  });
  
  // Handle the 'error' event
  stream.on('error', (error) => {
    console.error('An error occurred:', error);
  });