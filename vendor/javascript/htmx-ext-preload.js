// htmx-ext-preload@2.0.1 downloaded from https://ga.jspm.io/npm:htmx-ext-preload@2.0.1/preload.js

htmx.defineExtension("preload",{onEvent:function(e,t){if(e!=="htmx:afterProcessNode")return;var attr=function(e,t){if(e!=void 0)return e.getAttribute(t)||e.getAttribute("data-"+t)||attr(e.parentElement,t)};var load=function(e){var done=function(t){e.preloadAlways||(e.preloadState="DONE");attr(e,"preload-images")=="true"&&(document.createElement("div").innerHTML=t)};return function(){if(e.preloadState==="READY"){var t=e.getAttribute("hx-get")||e.getAttribute("data-hx-get");if(t)htmx.ajax("GET",t,{source:e,handler:function(e,t){done(t.xhr.responseText)}});else if(e.getAttribute("href")){var r=new XMLHttpRequest;r.open("GET",e.getAttribute("href"));r.onload=function(){done(r.responseText)};r.send()}}}};var init=function(e){if(e.getAttribute("href")+e.getAttribute("hx-get")+e.getAttribute("data-hx-get")=="")return;if(e.preloadState!==void 0)return;var t=attr(e,"preload")||"mousedown";const r=t.indexOf("always")!==-1;r&&(t=t.replace("always","").trim());e.addEventListener(t,(function(r){if(e.preloadState==="PAUSE"){e.preloadState="READY";t==="mouseover"?window.setTimeout(load(e),100):load(e)()}}));switch(t){case"mouseover":e.addEventListener("touchstart",load(e));e.addEventListener("mouseout",(function(t){t.target===e&&e.preloadState==="READY"&&(e.preloadState="PAUSE")}));break;case"mousedown":e.addEventListener("touchstart",load(e));break}e.preloadState="PAUSE";e.preloadAlways=r;htmx.trigger(e,"preload:init")};const r=t.target||t.detail.elt;r.querySelectorAll("[preload]").forEach((function(e){init(e);e.querySelectorAll("a,[hx-get],[data-hx-get]").forEach(init)}))}});var e={};export{e as default};

