const fs = require('fs');

fs.readFile('./test.txt', (err, data) => {
    console.time('funchallenge')
    if (err) {
        console.log('errrrrorrr');
    }
    // console.log('Async', data.toString('utf8'));
    // const positive = data.toString('utf8').split("(").length - 1;
    // const negative = data.toString('utf8').split(")").length - 1;
    const finalFloor = (data.toString('utf8').split("(").length - 1) - (data.toString('utf8').split(")").length - 1);
    console.log(finalFloor);

    var floor = 0;
    for (let i=1; i<data.toString('utf8').length+1; i++) {
        var floor = (data.toString('utf8').substring(0, i).split("(").length - 1) - (data.toString('utf8').substring(0, i).split(")").length - 1);
        if (floor < 0) {
            console.log(i);
            break; 
        }
    }

    console.timeEnd('funchallenge');
})

// const file = fs.readFileSync('./hello.txt');
// console.log('Sync', file.toString());

// APPEND
// fs.appendFile('./hello.txt', ' This is so cool!', err => {
//     if (err) {
//         console.log(err);
//     }
// })

// WRITE
// fs.writeFile('bye.txt', 'Sad to see you go', err => {
//     if (err) {
//         console.log(err);
//     }
// })

// DELETE
// fs.unlink('./bye.txt', err => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Inception');
// })