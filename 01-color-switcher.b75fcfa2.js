const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-reset]"),d=document.querySelector("button[data-pause]"),a=document.querySelector("body");e.addEventListener("click",(function(){e.disabled=!0,d.disabled=!1,t.disabled=!0,n=setInterval((()=>{a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),d.addEventListener("click",(function(){d.disabled=!0,t.disabled=!1,e.disabled=!1,clearInterval(n)})),t.addEventListener("click",(function(){t.disabled=!0,a.style.backgroundColor="inherit"}));let n=null;d.disabled=!0,t.disabled=!0;
//# sourceMappingURL=01-color-switcher.b75fcfa2.js.map
