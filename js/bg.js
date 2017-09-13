const head = document.head;
const style = document.createElement("style");
head.append(style);
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

for (var i = 0; i < 5; i++) {
    var int = Math.floor(Math.random() * (list.length + 1));
    if (int > list.length) {
        i--;
        continue;
    }
    _style.push(`.bg ul li:nth-child(${i+1}){
        background:url(../img/bg/${list[int]}) no-repeat center fixed;
        background-size:cover;
    }`);
}
style.innerHTML = _style.join("");

var nth = 0;
const lis = document.querySelectorAll(".bg li");

function bgAnimate() {
    nth = nth > lis.length - 1 ? nth++ : 0;
    for (var i = 0; i < lis.lenght; i++) {
        if (i == nth) {
            document.querySelector(".bg li").style.transform = `scale(1.2)`;
            document.querySelector(".bg li").style.opacity = 1;
        } else {
            document.querySelector(".bg li").style.transform = `scale(1)`;
            document.querySelector(".bg li").style.opacity = 1;
        }

    }
    setTimeout(bgAnimate, 5000);
}
//bgAnimate();
//看效果用
document.querySelector(".bg li").style.opacity = 1;