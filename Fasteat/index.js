document.getElementById('drawer_input').addEventListener('change', function() {
    if (this.checked) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loader2').classList.remove("load2");
    document.getElementById('loader2').style.transform = "translateX(100vw)";
    setLinkClickEvents();
});

window.addEventListener('pageshow', function() {
    getclasslist();
    document.getElementById('loader2').classList.remove("load2");
    document.getElementById('loader2').style.transform = "translateX(100vw)";
});

function setLinkClickEvents() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            var nextpage = "a";

            if (href == "https://ohori.ed.jp"){
                document.getElementById("loader_inside2").innerHTML = "Moving to Ohori";
                document.getElementById('loader2').classList.add("load2");
                setTimeout(() => {
                        window.location.href = href;
                    }, 1000);
            } else if(href == "https://forms.gle/jDrzzdpKQyL9UJiQ8"){
                document.getElementById("loader_inside2").innerHTML = "Moving to 申し込みフォーム";
                document.getElementById('loader2').classList.add("load2");
                setTimeout(() => {
                    window.location.href = href;
                    }, 1000);
            } else {
            
            // 相対パスを絶対パスに変換
            let absoluteHref = new URL(href, window.location.href).href;

            switch (absoluteHref) {
                case window.location.origin + "/index.html":
                    nextpage = "Home";
                    break;
                case window.location.origin + "/history.html":
                    nextpage = "History";
                    break;
                case window.location.origin + "/2/index.html":
                    nextpage = "ピタコヤキの定理";
                    break;
                case window.location.origin + "/5/index.html":
                    nextpage = "だいごのおにぎりやさん";
                    break;
                case window.location.origin + "/7/index.html":
                    nextpage = "焼きマロ";
                    break;
                case window.location.origin + "/11/index.html":
                    nextpage = "ディッパー段"
                    break;
                default:
                    nextpage = "404";
            }
            
            document.getElementById("loader_inside2").innerHTML = "Moving to " + nextpage;
            document.getElementById('loader2').classList.add("load2");
            setTimeout(() => {
                window.location.href = absoluteHref;
            }, 1000)
            }
        });
    });
}

function getclasslist (){
    const classlist = [
        {
            num:0
        },
        {
            num:2,
            name:"ピタコヤキの定理",
            name2:"-たこ焼き"
        },
        {
            num:5,
            name:"だいごのおにぎりやさん",
            name2:"-肉巻きおにぎり"
        },
        {
            num:7,
            name:"焼きマロ",
            name2:"-クロワッサン、タルト"
        },
        {
            num:11,
            name:"ディッパー段",
            name2:"-クレープ"
        },
    ]
    document.getElementById("classlist").innerHTML=''
    for (let i = 1; i < classlist.length; i++) {
        var child = document.createElement("li");
        child.classList.add("num_item");
        child.innerHTML=`<a href="https://fasteat.shop/${classlist[i].num}/index.html"><div>${classlist[i].name}</div><div class="num_item2">${classlist[i].name2}</div></a>`;
        document.getElementById("classlist").appendChild(child);
    }
    setLinkClickEvents(); // 生成したリンクにもクリックイベントを設定
}