'use strict';
eruda.init();

let rsltUp = document.getElementById('rsltUp');
let rsltDn = document.getElementById('rsltDn');
//rslt.textContent = 'd';
document.body.style.background = 'blue';

// それを1秒後に戻す
setTimeout(() => document.body.style.background = '', 500);

/*
window.addEventListener("keyup", function(e) {
  let str = "up:key='" + e.key + "' | code='" + e.code + "'";
  rsltUp.textContent = str;
}, true);

window.addEventListener("keydown", function(e) {
  let str = "dn:key='" + e.key + "' | code='" + e.code + "'";
  rsltDn.textContent = str;
}, true);

*/
/*
window.addEventListener("keydown",function(e) { 
    e.preventDefault();
    
    /*
    document.dispatchEvent(new KeyboardEvent("keydown",{
        key: "a"
    }));
    
};*/



