import{useState as t,useEffect as n,useRef as e,useCallback as r}from"react";import u from"@use-it/event-listener";var c={},i=function(t,n,e){return c[t]||(c[t]={callbacks:[],value:e}),c[t].callbacks.push(n),{deregister:function(){var e=c[t].callbacks,r=e.indexOf(n);r>-1&&e.splice(r,1)},emit:function(e){c[t].value!==e&&(c[t].value=e,c[t].callbacks.forEach(function(t){n!==t&&t(e)}))}}};export default function(c,o){if(void 0===o&&(o=global.localStorage),o){var a=function(t){return{get:function(n,e){var r=t.getItem(n);return null===r?"function"==typeof e?e():e:JSON.parse(r)},set:function(n,e){t.setItem(n,JSON.stringify(e))}}}(o);return function(o){return function(c,o,a){var f=a.get,l=a.set,s=e(null),v=t(function(){return f(o,c)}),g=v[0],p=v[1];u("storage",function(t){if(t.key===o){var n=JSON.parse(t.newValue);g!==n&&p(n)}}),n(function(){return s.current=i(o,p,c),function(){s.current.deregister()}},[]);var m=r(function(t){var n="function"==typeof t?t(g):t;l(o,t),p(n),s.current.emit(t)},[g,l,o]);return[g,m]}(o,c,a)}}return t}
