// readInModule2.js
function test(func) {
    try {
        func();
    } catch (err) {
        console.error(err);
    }
}

test(() => console.log('VAR=' + VAR));
test(() => console.log('LET=' + LET));
test(() => console.log('CONST=' + CONST));

console.log('window.VAR=' + window.VAR);
console.log('window.LET=' + window.LET);
console.log('window.CONST=' + window.CONST);