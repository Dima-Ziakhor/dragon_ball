(()=>{var e={877:()=>{!function(e){const t=document.querySelectorAll(".card");let n=null;t.forEach((e=>e.addEventListener("click",(()=>{n&&n!==e&&n.setAttribute("data-reverse","false"),"false"===e.getAttribute("data-reverse")?(e.setAttribute("data-reverse","true"),n=e):e.setAttribute("data-reverse","false")}))))}()},685:()=>{const e=document.getElementById("login"),t=document.getElementById("password");document.getElementById("submit").addEventListener("click",(async n=>{n.preventDefault();const o=await async function(){try{const e=await fetch("https://ipinfo.io/json?token=8317693aade656"),t=await e.json();return await t.ip}catch{throw new Error("Fetch failed")}}();if(e.value.toLowerCase()===o&&t.value.toLowerCase()===o){const e=document.createElement("a");e.href="https://vk.com/memesquad47",e.target="_blank",e.style.position="absolute",e.style.bottom="30px",e.style.left="30px",e.style.height="30px",e.style.width="30px",e.style.zIndex="2",e.style.backgroundColor="#fff",e.classList.add("inserted"),document.querySelector(".wrapper").append(e)}}))},54:()=>{const e=document.querySelector(".hint");setTimeout((()=>{e.style.display="block"}),6e4)},341:()=>{const e=document.querySelectorAll(".animated");e.length&&window.addEventListener("scroll",(function(){e.forEach((e=>{const t=e.offsetHeight,n=(e=>{const t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+n}})(e).top;let o=window.innerHeight-t/10;t>window.innerHeight&&(o=window.innerHeight-window.innerHeight/10),window.scrollY>n-o&&window.scrollY<n+t?e.classList.add("animated--active"):e.classList.contains("animated--no-hide")||e.classList.remove("animated--active")}))}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(877),n(341),n(685),n(54)})()})();