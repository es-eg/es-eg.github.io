import{as as f,r as g,o as _}from"./index.2df0f4b1.js";function p(o,t,i){const n=new Date;n.setTime(n.getTime()+i*1e3);const e="expires="+n.toUTCString();document.cookie=o+"="+t+";"+e+";path=/"}function c(o){const t=o+"=",i=document.cookie.split(";");for(let n=0;n<i.length;n++){let e=i[n];for(;e.charAt(0)==" ";)e=e.substring(1);if(e.indexOf(t)==0)return e.substring(t.length,e.length)}return""}function d(o){document.cookie=o+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}const r="start_time",h=f("counter",()=>{const t=g(!1);let i;_(()=>{c(r).length>0&&(t.value=!0)});function n(){const s=new Date,l=Math.ceil(s.getTime()/1e3);p(r,`${l}`,2.5*3600),t.value=!0}function e(){clearInterval(i)}function a(){d(r),t.value=!1}function u(){return parseInt(c(r))}function m(s){i=s}return{given_time:3600,start_timer:n,timer_started:t,get_start_timestamp:u,stop_timer:e,reset_timer:a,set_interval:m}});export{h as u};
