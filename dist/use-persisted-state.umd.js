!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("@use-it/event-listener")):"function"==typeof define&&define.amd?define(["react","@use-it/event-listener"],t):e.usePersistedState=t(e.react,e.useEventListener)}(this,function(e,t){t=t&&t.hasOwnProperty("default")?t.default:t;var n={},r=function(e,t,r){return n[e]||(n[e]={callbacks:[],value:r}),n[e].callbacks.push(t),{deregister:function(){var r=n[e].callbacks,u=r.indexOf(t);u>-1&&r.splice(u,1)},emit:function(r){n[e].value!==r&&(n[e].value=r,n[e].callbacks.forEach(function(e){t!==e&&e(r)}))}}};return function(n,u){if(void 0===u&&(u=global.localStorage),u){var i=function(e){return{get:function(t,n){var r=e.getItem(t);return null===r?"function"==typeof n?n():n:JSON.parse(r)},set:function(t,n){e.setItem(t,JSON.stringify(n))}}}(u);return function(u){return function(n,u,i){var c=i.get,a=i.set,f=e.useRef(null),o=e.useState(function(){return c(u,n)}),s=o[0],l=o[1];t("storage",function(e){if(e.key===u){var t=JSON.parse(e.newValue);s!==t&&l(t)}}),e.useEffect(function(){return f.current=r(u,l,n),function(){f.current.deregister()}},[]);var d=e.useCallback(function(e){var t="function"==typeof e?e(s):e;a(u,e),l(t),f.current.emit(e)},[s,a,u]);return[s,d]}(u,n,i)}}return e.useState}});
