!function(){"use strict";!function(e,t){void 0===t&&(t={});var i,n,o=t.insertAt;e&&"undefined"!=typeof document&&(i=document.head||document.getElementsByTagName("head")[0],(n=document.createElement("style")).type="text/css","top"===o&&i.firstChild?i.insertBefore(n,i.firstChild):i.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)))}(".sidebar-nav>ul>li{overflow:hidden;margin:6px 0}.sidebar-nav>ul>li>p{cursor:pointer;display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #eee}.sidebar-nav>ul>li>p>.count{color:#aaa;font-weight:400;margin-right:10px}.ul-hide{height:0;overflow:hidden;transition:all .5s}");window.$docsify=window.$docsify||{},window.$docsify.plugins=[function(e,d){e.init(function(){d.record=[]}),e.doneEach(function(){var e=document.querySelectorAll(".sidebar-nav > ul > li > p");Array.prototype.forEach.call(e,function(e,t){var i=e.nextSibling,n=i.childNodes;e.innerHTML="<div>".concat(e.innerText,'</div><div class="count">').concat(n.length,"</div>");var o=Array.prototype.reduce.call(n,function(e,t){return e+t.offsetHeight+6},0);i.classList.add("ul-hide"),d.record[t]&&(i.style.height="".concat(o,"px")),e.addEventListener("click",function(e){i.offsetHeight?(d.record[t]=!1,i.style.height="0px"):(d.record[t]=!0,i.style.height="".concat(o,"px"))})})})}].concat(window.$docsify.plugins||[])}();
