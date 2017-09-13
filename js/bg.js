const body = document.querySelector(".body");
const bg = document.createElement("div");
bg.className = "bg";
const ul = document.createElement("ul");
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
const li = [];

for (var i = 0; i < 5; i++) {
    var int = Math.floor(Math.random() * (list.length + 1));
    if (int > list.length) {
        i--;
        continue;
    }
    li.push(`<li style="background:url(../img/bg/${list[int]}) no-repeat center;"></li>`);
}

body.append(bg);
bg.append(ul);
ul.innerHTML = li.join("");