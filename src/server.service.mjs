import {get} from 'http'

// Concats the chunks from an IncomingMessage-Object into a string
export function getBody(req) {
    return new Promise((resolve, reject) => {
        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
            .on('end', () => {
                body = body.concat().toString();
                resolve(body);
            })
            .on('error', (e) => {
                reject(new Error(e));
            })
    })
}

// Sends out a standard HTTP-GET-Request and returns the content
export function makeRequest(url) {
    return new Promise((resolve, reject) => {
            get(url, async res => {
                let body = await getBody(res);
                resolve(body); 
            })
            .on('error', (e) => {
                reject(new Error(e));
            })
    })
}