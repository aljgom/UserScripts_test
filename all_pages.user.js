// ==UserScript==
// @name       All Pages
// @namespace  aljgom
// @version    0.1
// @description  added global functions/variables
// @match      http://*/*
// @match      https://*/*
// @grant      GM_setValue
// @grant      GM_getValue
// @grant      GM_deleteValue
// @grant      GM_listValues
// @grant      GM_xmlhttpRequest
// @grant      unsafewindow
// @grant      window.close
// ==/UserScript==

var url = document.location.toString();

// Add forEach to HTMLTableSectionElement, NodeList and HTMLCollection
HTMLTableSectionElement.prototype.forEach = NodeList.prototype.forEach = HTMLCollection.prototype.forEach = Array.prototype.forEach;

// Add sorting function to be able to sort using a key function
Array.prototype.sortBy = function(key_func, reverse=false){
      return this.sort( (a, b) => ( key_func(b) - key_func(a) ) * (reverse ? 1 : -1) )
 }

/* Adds functions to the window object */
 function addFunc(f,force){
     if( !(f.name in unsafeWindow) )  unsafeWindow[f.name] = f;
     else{
         log___('%caddFunc: '+ f.name +' already exists','color:grey');
         if(force) {
             log___('%caddFunc:   force adding '+ f.name , 'color:grey' );
             unsafeWindow[f.name] = f;
         }
     }
 }

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms));    }
addFunc(sleep);


function gi(id){ return document.getElementById(id); }
function gc(cl){ return document.getElementsByClassName(cl); }
if( !document.location.toString().match("google.com") ){   // breaks google calendar, docs
    addFunc(gi);
    addFunc(gc);
}

// usage: log({___:10},..);
function log(){                // log = console.log.bind(console)
    var indent = arguments[0] && arguments[0].___;
    if(indent) console.log( Array(indent).join(' ')+arguments[1], ...(Array(...arguments)).splice(2) ); // concatenates first arg in case it's using css formatting
    else    console.log(...arguments);
} addFunc( log );

function log_(){
    log({___:60},...arguments );
}  addFunc( log_ );

log___ = log_;

/* Waits for test to return a truthy value
 */
async function waitFor(test, timeout_ms=20*2000){             // args:("$('#el_id')", timeout_ms= 1000)
    return new Promise(async(resolve,reject)=>{
        if( typeof(timeout_ms) != "number") reject("Timeout argument not a number in waitFor(selector, timeout_ms)");
        var freq = 100;
        var result
        while( result === undefined || result === false || result === null || result.length === 0 ){  // for non arrays, length is undefined, so != 0
            if( timeout_ms % 1000 <freq)     log___('%c'+'waiting for: '+ test,'color:#809fff' );
            if( (timeout_ms -= freq) < 0 ){  log___('%c'+'Timeout : '   + test,'color:#cc2900' );
                                           resolve(false);
                                           return;
                                          }
            await sleep(freq);
            result = typeof(test) === 'string' ? eval(test) : test();
        }
        log___('Passed: ', test);
        resolve(result);
    });
}
addFunc(waitFor);
