// import fs (file system), process, axios 
const fs = require('fs') 
const process = require('process') 
const axios = require('axios') 

function cat(path) {
    // read file (one.txt on same directory) 
    // path, encoding, callback(err, data)
    fs.readFile(path, 'utf8', (err,data) => {
        // "err" handling 
        if(err) {
            console.log('Error', err)
            process.exit(1) 
        }
        console.log(data) 
    })
}

function webCat(url) {
    axios.get(url) 
    .then(response => {
        console.log(response.data)
    })
    .catch(err => console.log(err)) 

}
// webCat('https://google.com') 

let path = process.argv[2]

if(path.slice(0, 4) === 'http') {
    webCat(path) 
} else {
    cat(path);
}