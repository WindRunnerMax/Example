!function(){"use strict";!function(e,t){void 0===t&&(t={});var n,o,i=t.insertAt;e&&"undefined"!=typeof document&&(n=document.head||document.getElementsByTagName("head")[0],(o=document.createElement("style")).type="text/css","top"===i&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)))}('@import "//at.alicdn.com/t/font_1844225_yz2bwdnajp.css";#catalogTitle{border-bottom:1px solid #eee;padding:6px 10px;font-weight:700;display:flex;justify-content:space-between;cursor:pointer}.catalog{width:160px;padding:0;font-size:14px;line-height:27px;position:fixed;right:3px;top:170px;background-color:#fff;border:1px solid #eee;border-radius:3px;overflow:hidden;overflow-y:auto;max-height:600px;transition:all .5s}.catalog>li{padding:0 10px;color:#505d6b;cursor:pointer;list-style:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.catalog>li:hover{color:#4c98f7}.level3{margin-left:10px}.iconfont{font-weight:400;font-size:16px}.contract{width:50px;height:50px;position:fixed;top:170px;right:3px;border-radius:100%;border:1px solid #eee;display:flex;justify-content:center;align-items:center;cursor:pointer;transition:all .5s;overflow:hidden}.catalog-hide{right:-170px}'),window.$docsify=window.$docsify||{},window.$docsify.plugins=[function(e,t){e.doneEach(function(){var n=[0,0,0],e=document.getElementById("main").childNodes,o=document.getElementById("catalog")||document.createElement("ul");o.innerHTML="";var t=document.createElement("div");t.setAttribute("id","catalogTitle");var i=document.createElement("div");i.innerText="Catalog";var a=document.createElement("div");a.className="iconfont icon-youjiantou-copy",t.appendChild(i),t.appendChild(a),t.addEventListener("click",function(e){o.classList.add("catalog-hide"),document.getElementById("contract").classList.remove("catalog-hide")}),o.appendChild(t),o.setAttribute("id","catalog"),o.className="catalog catalog-hide",Array.prototype.forEach.call(e,function(t){var e;t.nodeName.match(/H[123]/)&&(e=document.createElement("li"),"H1"===t.nodeName?(++n[0],n[1]=0,n[2]=0):"H2"===t.nodeName?(++n[1],n[2]=0,e.className="level2",e.innerText="".concat(n[0],".").concat(n[1]," ").concat(t.innerText)):"H3"===t.nodeName&&(++n[2],e.className="level3",e.innerText="".concat(n[0],".").concat(n[1],".").concat(n[2]," ").concat(t.innerText)),e.addEventListener("click",function(e){window.scrollTo({top:t.offsetTop,left:0,behavior:"smooth"})}),o.appendChild(e))});var c=document.getElementById("contract")||document.createElement("div");c.innerHTML="";var d=document.createElement("div");d.className="iconfont icon-fanhui",c.appendChild(d),c.setAttribute("id","contract"),c.className="contract",c.addEventListener("click",function(e){o.classList.remove("catalog-hide"),c.classList.add("catalog-hide")}),document.getElementsByTagName("body")[0].appendChild(o),document.getElementsByTagName("body")[0].appendChild(c)})}].concat(window.$docsify.plugins||[])}();
