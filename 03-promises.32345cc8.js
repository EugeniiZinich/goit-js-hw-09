var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("iQIUW");const i=document.querySelector(".form");function l(e,t){const n=Math.random()>.3;return new Promise(((r,o)=>{setTimeout((()=>{n&&r(`✅ Fulfilled promise ${e} in ${t}ms`),o(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}i.addEventListener("submit",(function(e){e.preventDefault();const t=Number(i.step.value),n=Number(i.amount.value);let r=Number(i.delay.value);for(let e=0;e<n;e+=1){l(e+1,r).then((e=>o.Notify.success(e))).catch((e=>o.Notify.failure(e))),r+=t}}));
//# sourceMappingURL=03-promises.32345cc8.js.map
