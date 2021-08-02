//windows.js
console.log('%c'+(document.currentScript ? 'classic' : 'module'),'font-weight:bold;margin-top:1em');

//console.log( document.currentScript ? 'classic' : 'module' );
console.log('window='+ window);
console.log('self=' + self, window === self);
console.log('this=' + this, window === this);
console.log('globalThis=' + globalThis, window === globalThis);