!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}({2:function(e,t){!function(e){var t="ZULMA_THEME",n="stop-blink",o="stylesheet",r=null,c=localStorage.getItem(t);function i(e,n){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.href="/".concat(e,".css"),(r=document.getElementsByTagName("head")[0].appendChild(o)).addEventListener("load",u),n&&l(),function(e){localStorage.setItem(t,e)}(e)}function l(){document.querySelectorAll(".".concat(o)).forEach(function(e){e.remove()})}function u(){var e;r.removeEventListener("load",u),l(),r.className+=o,(e=document.getElementById(n))&&e.remove()}e.init=function(){var e,t;c&&!document.getElementById(c)&&(e=document.getElementsByTagName("head")[0],(t=document.createElement("style")).id=n,t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=css:t.appendChild(document.createTextNode("body{visibility:hidden;}")),e.appendChild(t),i(c,!0),window.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("#theme-select>option").forEach(function(e){e.value===c&&(e.selected="selected")})})),window.addEventListener("DOMContentLoaded",function(){document.getElementById("theme-select").onchange=function(){i(this.value)}})}}(switch_css=window.switch_css||{}),switch_css.init()}});
//# sourceMappingURL=zulma_switchcss.js.map