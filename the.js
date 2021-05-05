const { readFile } = require('fs');

function fileReader(roo1t) {
    return new Promise((res, rej) => {
        readFile(roo1t, { encoding: 'utf-8' }, (err , lol) => {
            return err ? rej(err) : res(lol);
            // return rej("ddd");
        });
    });
}

async function x() {
    try {
        const lol =  await fileReader('./lol.txt');
        const sasa = await fileReader('./sasa.txt');
        const whatever = await fileReader('./whatever.txt');
        console.log({ lol,sasa,whatever});
    }catch(err) {   
        console.log("alphabetagamma " + err);
    }
}

x();