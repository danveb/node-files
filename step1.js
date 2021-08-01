// import fs (file system) 
const fs = require('fs') 

function cat(path) {
    // read file (one.txt on same directory) 
    // path, encoding, callback(err, data)
    fs.readFile(path, 'utf8', (err,data) => {
        // "err" handling 
        if(err) {
            console.log('Error', err)
            process.kill(1) 
        }
        console.log(data) 
    })
}
cat('one.txt') // This is file one.
cat('huh.txt') // error