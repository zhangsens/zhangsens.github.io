const head = document.head;
const style = document.createElement("style");
head.append(style);
const body = document.querySelector(".body");
const bg = document.createElement("div");
const bgUl = document.createElement("ul");
bg.className = "bg";
body.append(bg);
bg.append(bgUl);

const list = [`48433698_p0.jpg`,
    `64899108_p0.png`,
    `64876862_p0_master1200.jpg`,
    `63372445_p0.jpg`,
    `62737299_p0.jpg`,
    `50288222_p0.jpg`,
    `52610531_p0.jpg`,
    `58128618_p0.jpg`,
    `59740059_p0.jpg`,
    `59888608_p0.jpg`,
    `60396265_p0.jpg`
];
const _style = [];
const bgNode = [];
for (var i = 0; i < 5; i++) {
    var int = Math.floor(Math.random() * list.length);
    _style.push(`.bg ul li:nth-child(${i+1}) span{
        background:url(../img/bg/${list[int]}) no-repeat center fixed;
        background-size:cover;
        display: block;
        width: 100%;
        height: 100%;
        transition: 10s transform linear;
    }`);
    bgNode.push(`<li><span></span></li>`);
}
style.innerHTML = _style.join("");
bgUl.innerHTML = bgNode.join("");

var nth = 0;
const lis = document.querySelectorAll(".bg li");

function bgAnimate() {
    nth = nth < lis.length - 1 ? ++nth : 0;
    for (var i = 0; i < lis.length; i++) {
        if (i == nth) {
            lis[i].firstElementChild.style.transform = `scale(1.2)`;
            lis[i].style.opacity = 1;
        } else {
            lis[i].firstElementChild.style.transform = `scale(1)`;
            lis[i].style.opacity = 0;
        }

    }
    setTimeout(bgAnimate, 10000);
}
bgAnimate();