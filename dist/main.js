!function(t){var e={};function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const a=()=>{const t=document.querySelector("#content"),e=document.createElement("div");e.setAttribute("class","container-fluid"),t.append(e);const n=document.createElement("h1");n.textContent="Dragon Sushi",e.append(n);const a=document.createElement("div");a.setAttribute("class","hero-container"),e.append(a);const s=document.createElement("div");s.setAttribute("class","bg"),s.classList.add("h-50"),a.append(s);const c=document.createElement("p");c.setAttribute("class","info"),c.classList.add("mt-4"),c.textContent="The fine delicacies of the East meets the ravenous appetite of a small British country filled with some very angry people.\n\n\tHere at Dragon Sushi we understand that real dragons have real hunger, and what better way to satisfy that hunger than with the finest sushi the Atlantic has to offer?\n\n\tThey may be small and bite sized but that makes it all the easier to eat your body weight in them.\n\n\tEnjoy!",a.append(c)};a();const s=(()=>{const t=document.querySelector("#content"),e=document.createElement("nav");e.setAttribute("class","navbar"),e.classList.add("pb-0");const n=document.createElement("div");n.setAttribute("class","navbar-nav"),n.classList.add("w-50");const a=document.createElement("a");a.setAttribute("class","nav-link"),a.classList.add("active"),a.textContent="Home";const s=document.createElement("a");s.setAttribute("class","nav-link"),s.textContent="Menu";const c=document.createElement("a");return c.setAttribute("class","nav-link"),c.textContent="Contact",n.append(a,s,c),e.append(n),t.insertAdjacentElement("beforebegin",e),{homeTab:a,menuTab:s,contactTab:c}})(),c=()=>{document.querySelector("#content").innerHTML=""};(()=>{const t=s.homeTab,e=s.menuTab,n=s.contactTab;t.addEventListener("click",s=>{c(),a(),"active"!=t.getAttribute("class")&&t.classList.add("active"),e.classList.remove("active"),n.classList.remove("active")}),e.addEventListener("click",a=>{c(),(()=>{const t=document.querySelector("#content"),e=document.createElement("div");e.setAttribute("class","container");const n=document.createElement("div");n.setAttribute("class","row");const a=document.createElement("div");a.setAttribute("class","col"),a.classList.add("menuCard");const s=document.createElement("div");s.setAttribute("class","col"),s.classList.add("menuCard");const c=document.createElement("div");c.setAttribute("class","col"),c.classList.add("menuCard");const o=document.createElement("img");o.setAttribute("src","images/menu1.jpg"),o.setAttribute("class","menu-image"),o.classList.add("w-100");const r=document.createElement("h3");r.setAttribute("class","mt-3"),r.textContent="Dragon Fire Platter";const i=document.createElement("p");i.textContent="A platter of the most delicious sushi bites seasoned with enough spice to burn a hole in the roof of your mouth.";const u=document.createElement("h5");u.textContent="£29.99";const l=document.createElement("img");l.setAttribute("src","images/menu2.jpg"),l.setAttribute("class","menu-image"),l.classList.add("w-100");const d=document.createElement("h3");d.setAttribute("class","mt-3"),d.textContent="Green Dragon Platter";const m=document.createElement("p");m.textContent="For the mild mannered. All your favourites but without the spice.";const b=document.createElement("h5");b.textContent="£19.99";const p=document.createElement("img");p.setAttribute("src","images/menu3.jpg"),p.setAttribute("class","menu-image"),p.classList.add("w-100");const h=document.createElement("h3");h.setAttribute("class","mt-3"),h.textContent="Targaryen Tea";const v=document.createElement("p");v.textContent="We serve a variety of herbal teas to help you wash down the blood of your enemies.";const f=document.createElement("h5");f.textContent="£4.99",t.append(e),e.append(n),n.append(a,s,c),a.append(o,r,i,u),s.append(l,d,m,b),c.append(p,h,v,f)})(),"active"!=e.getAttribute("class")&&e.classList.add("active"),t.classList.remove("active"),n.classList.remove("active")})})()}]);