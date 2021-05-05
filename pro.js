const { readFile } = require('fs');

const prom = new Promise((res,rej) => {
    readFile('./lol.txt',{ encoding: 'utf-8'},(err,lol) => {
        if(err){
            rej(err);
        }
        readFile('./sasa.txt',{ encoding: 'utf-8'},(saerr,sasa) => {
            if(saerr){
                rej(saerr);
            }
            readFile('./whatever.txt',{ encoding: 'utf-8'},(werr,whatever) => {
                if(werr){
                    rej(werr);
                }
                else{
                    res({lol,sasa,whatever});
                }
            })
        })
    })
})


prom.then(res => {
    console.log(res);
}).catch(rej => {
    console.log(rej+"  the error");
})