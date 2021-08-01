// import fs (file system), process, axios 
const fs = require('fs') 
const process = require('process') 
const axios = require('axios') 

function cat(path, out) {
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

function webCat(url, out) {
    axios.get(url) 
    .then(response => {
        console.log(response.data)
    })
    .catch(err => console.log(err)) 

}
// webCat('https://google.com') 

function outPut(text, out) {
    if(out) {
        fs.writeFile(out, text, 'utf8', function(err) {
            if(err) {
                console.log(err)
                process.exit(1)
            }
        })
    } else {
        console.log(text) 
    }
}

let path = null;
let out = null; 

if(process.argv[2] == '--out') {
    out = process.argv[3]
    path = process.argv[4]
} else {
    path = process.argv[2]
}

if(path.slice(0, 4) === 'http') {
    webCat(path, out);
} else {
    cat(path, out) 
}