function loadCatalog(hook, vm) {
    hook.doneEach(function() {
        var level = [0, 0, 0];
        var nodeList = document.getElementById("main").childNodes;
        var catalog = document.getElementById("catalog");
        var ul = catalog || document.createElement("ul");
        ul.innerHTML = "";

        var title = document.createElement("div");
        title.setAttribute("id", "catalogTitle");
        var titleText = document.createElement("div");
        titleText.innerText = "Catalog";
        var titleShrink = document.createElement("div");
        titleShrink.className = "iconfont icon-youjiantou-copy";
        title.appendChild(titleText);
        title.appendChild(titleShrink);
        title.addEventListener('click', (e) => {
            ul.classList.add("catalog-hide");
            document.getElementById("contract").classList.remove("catalog-hide");
        })

        ul.appendChild(title);
        ul.setAttribute("id", "catalog");
        ul.className = "catalog catalog-hide";
        Array.prototype.forEach.call(nodeList, (v) => {
            if (v.nodeName.match(/H[123]/)) {
                var li = document.createElement("li");
                if (v.nodeName === "H1") {
                    ++level[0];
                    level[1] = 0;
                    level[2] = 0;
                    // li.className = "level1";
                    // li.innerText = `${level[0]} ${v.innerText}`;
                } else if (v.nodeName === "H2") {
                    ++level[1];
                    level[2] = 0;
                    li.className = "level2";
                    li.innerText = `${level[0]}.${level[1]} ${v.innerText}`;
                } else if (v.nodeName === "H3") {
                    ++level[2];
                    li.className = "level3";
                    li.innerText = `${level[0]}.${level[1]}.${level[2]} ${v.innerText}`;
                }
                li.addEventListener('click', (e) => {
                    window.scrollTo({ top: v.offsetTop, left: 0, behavior: 'smooth' });
                })
                ul.appendChild(li);
            }
        });

        var contract = document.getElementById("contract") || document.createElement("div");
        contract.innerHTML = "";
        var icon = document.createElement("div");
        icon.className = "iconfont icon-fanhui";
        contract.appendChild(icon);
        contract.setAttribute("id", "contract");
        contract.className = "contract";
        contract.addEventListener('click', (e) => {
            ul.classList.remove("catalog-hide");
            contract.classList.add("catalog-hide");
        })

        document.getElementsByTagName("body")[0].appendChild(ul);
        document.getElementsByTagName("body")[0].appendChild(contract);
    });
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [loadCatalog].concat(window.$docsify.plugins || []);