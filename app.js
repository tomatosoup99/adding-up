'use strict';
const fs = require('fs');
const readline = require('readline');
const rs = fs.ReadStream('./popu-pref.csv');
const r1 = readline.createInterface({'input': rs, 'output':{} });
r1.on('line', (lineString) => {
    console.log(lineString);
});
r1.resume();
