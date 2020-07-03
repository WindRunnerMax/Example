import style from "./style.css";

var loadSlidebar = function(hook, vm) {
    hook.init(function() {
        vm.record = [];
    });

    hook.doneEach(function() {
        var caption = document.querySelectorAll(".sidebar-nav > ul > li > p");
        Array.prototype.forEach.call(caption, (p, pIndex) => {
            var ul = p.nextSibling;
            var lis = ul.childNodes;
            p.innerHTML = `<div>${p.innerText}</div><div class="count">${lis.length}</div>`;
            var height = Array.prototype.reduce.call(lis, (pre, now) => pre + now.offsetHeight + 6, 0);
            ul.classList.add("ul-hide");
            if(vm.record[pIndex]) ul.style.height = `${height}px`;
            p.addEventListener("click", e => {
                if (ul.offsetHeight) {
                    vm.record[pIndex] = false;
                    ul.style.height = `0px`;
                }else {
                    vm.record[pIndex] = true;
                    ul.style.height = `${height}px`;
                }
            })
        })
    })

}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [loadSlidebar].concat(window.$docsify.plugins || []);