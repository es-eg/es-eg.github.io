import{S as i}from"./index.478b815f.js";const e=[];function o(n){e[e.length-1](n)}function c(n){i.is.desktop===!0&&(e.push(n),e.length===1&&document.body.addEventListener("focusin",o))}function u(n){const t=e.indexOf(n);t>-1&&(e.splice(t,1),e.length===0&&document.body.removeEventListener("focusin",o))}export{c as a,u as r};
