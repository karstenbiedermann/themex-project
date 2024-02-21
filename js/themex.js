(()=>{"use strict";(()=>{function e(){const e=document.querySelectorAll(".modal"),t="modal--open",n="modal-body-open",c=document.querySelectorAll(".modal-trigger"),a=document.querySelector(".modal-close"),s=document.body,o=document.createElement("div");function i(e){s.classList.remove(n),e.classList.remove(t),o.remove()}e.forEach((e=>{c.forEach((e=>{e.addEventListener("click",(e=>{!function(e,c){const a=c.currentTarget.dataset.target,i=document.getElementById(a);s.classList.toggle(n),i.classList.toggle(t),s.appendChild(o),o.className="modal-backdrop"}(0,e)}))})),function(e){document.addEventListener("click",(t=>{t.target==e&&i(e)}))}(e),a.addEventListener("click",(()=>{i(e)}))}))}function t(){const e=document.querySelector(".form"),t=document.querySelector(".form-action-submit"),n=document.querySelector(".form-step-indicator-item.done + .form-step-indicator-item--last"),c="visible",a="input--error",s="input--success",o="form-element-error",i="form-element-message--error";function r(e,t){1==e?(t.classList.add("form-action-submit--disabled"),t.disabled=!0,n&&n.classList.remove("form-step-indicator-item--valid")):(t.classList.remove("form-action-submit--disabled"),t.disabled=!1,n&&n.classList.add("form-step-indicator-item--valid"))}function l(e,t,n){clearTimeout(e),e=setTimeout((()=>{const e=t.querySelector(".form-element-message");n.checkValidity()?(n.classList.remove(a),t.classList.remove(o),e.classList.remove(c),e.classList.remove(i),n.classList.add(s)):(n.classList.add(a),e.classList.add(c),t.classList.add(o),e.classList.add(i),n.classList.remove(s))}),500)}if(e&&t){const n=e.querySelectorAll(".form-element");let c;r(!0,t),n.forEach((e=>{const t=e.querySelector(".form-element-field"),n=e.querySelector('[type="text"]'),a=e.querySelector("select"),o=e.querySelector(".datepicker-input");t.value&&t&&t.checkValidity()&&t.classList.add(s),t.addEventListener("keyup",(()=>{l(c,e,t)})),t==n&&t==a&&t==o||t.addEventListener("click",(()=>{l(c,e,t)}))})),e.addEventListener("input",(()=>{clearTimeout(c),setTimeout((()=>{e.checkValidity()?r(!1,t):r(!0,t)}),500)})),e.addEventListener("submit",(()=>{e.checkValidity()?r(!1,t):r(!0,t)})),e.checkValidity()?r(!1,t):r(!0,t)}}function n(){const e="visible";let t=document.querySelector(".datepicker");const n=document.querySelector(".datepicker-input"),c=document.querySelector(".datepicker-calendar"),a=document.querySelector(".datepicker-calendar-container"),s=document.querySelector(".datepicker-calendar-month"),o=document.querySelector(".datepicker-button--prev"),i=document.querySelector(".datepicker-button--next"),r=document.querySelector(".datepicker-month");let l,d,u;function m(t,o){l=t,d=o;const i=new Date(t,o+1,0).getDate(),m=function(){const e=new Date;return Array.from(new Array(12),((t,n)=>(e.setMonth(n),e.toLocaleString(c.dataset.language,{month:"long"}))))}();a.innerHTML="",s&&(s.textContent=m[d]+" "+l),r.innerHTML="",r.textContent=m[d]+" "+l;const L=document.createElement("ul");L.classList.add("datepicker-calendar-days"),Array.from({length:i},((e,t)=>t+1)).forEach((t=>{const a=document.createElement("li"),s=document.createElement("span");a.classList.add("datepicker-calendar-day"),a.classList.add("datepicker-calendar-day-"+t),s.textContent=t,t===(new Date).getDate()&&d===(new Date).getMonth()&&l===(new Date).getFullYear()&&(a.classList.add(e),u=a),a.addEventListener("click",(()=>{!function(t,a,s,o){u&&u.classList.remove(e);const i=new Date(t,a,s).toLocaleDateString(c.dataset.language,{year:"numeric",month:"2-digit",day:"2-digit"});n.value=i,o.classList.add(e),u=o,c.classList.remove(e)}(l,d,t,a)})),a.appendChild(s),L.appendChild(a)})),a.appendChild(L)}t&&(m(l,d),n.addEventListener("click",(()=>{c.classList.contains(e)?c.classList.remove(e):c.classList.add(e)})),r.addEventListener("change",(()=>{d=parseInt(r.value),m(l,d)})),o.addEventListener("click",(()=>{d--,d<0&&(l--,d=11),m(l,d)})),i.addEventListener("click",(()=>{d++,d>11&&(l++,d=0),m(l,d)})),m((new Date).getFullYear(),(new Date).getMonth()))}window.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".accordion"),t="visible";e.forEach((e=>{e.querySelectorAll(".accordion-item").forEach((e=>{const n=e.querySelector(".accordion-header"),c=e.classList.contains(t);n.setAttribute("aria-expanded",c?"true":"false"),n.addEventListener("click",(()=>{!function(e){const n=e.querySelector(".accordion-header");"true"===n.getAttribute("aria-expanded")?(e.classList.remove(t),n.setAttribute("aria-expanded","false")):(e.classList.add(t),n.setAttribute("aria-expanded","true"))}(e)}))}))}))})),window.addEventListener("DOMContentLoaded",(function(){return{handleModal:e()}})),window.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".nav-flyout-toggle");e&&e.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();const n=this.nextElementSibling;n.classList.contains("visible")?(e.classList.remove("active"),n.classList.remove("visible")):(document.querySelectorAll(".nav-flyout").forEach((function(e){e.classList.remove("visible")})),n.classList.add("visible"),e.classList.add("active"))}))})),document.addEventListener("click",(function(e){e.target.closest(".nav-flyout-toggle")||(document.querySelectorAll(".nav-flyout").forEach((function(e){e.classList.remove("visible")})),document.querySelectorAll(".nav-flyout-toggle").forEach((function(e){e.classList.remove("active")})))}));const t=document.querySelector(".burger-menu"),n=document.querySelector(".navbar-nav");t&&n&&t.addEventListener("click",(function(){t.classList.toggle("active"),n.classList.toggle("visible")}))})),window.addEventListener("DOMContentLoaded",(function(){return{handleFieldValidation:t()}})),window.addEventListener("DOMContentLoaded",(function(){return{handleDatepicker:n()}})),window.addEventListener("DOMContentLoaded",(function(){const e="visible";document.addEventListener("click",(t=>{const n=t.target.closest(".select-trigger");if(!n)return;const c=n.classList.contains(e);if(function(t,n){const c=document.querySelectorAll(".select-options");var a;a=e,c.forEach((e=>{e.classList.remove(a)})),n?t.classList.remove(e):(t.classList.add(e),t.nextElementSibling.classList.toggle(e))}(n,c),!c){const t=n.nextElementSibling;t.addEventListener("click",(c=>{const a=c.target.closest(".select-option");if(!a)return;const s=a.dataset.title,o=a.dataset.value,i=t.nextElementSibling;n.textContent=s,n.classList.remove(e),t.classList.remove(e),i.value=o}),{once:!0})}}))}))})()})();