"use strict"

function nav_3D(option) {
    const body = document.querySelector("body");
    const box = document.createElement("div");
    const ele = {
        hi: document.createElement("a"),
        github: document.createElement("a"),
        acfun: document.createElement("a"),
        bilibili: document.createElement("a"),
        taobao: document.createElement("a"),
        steam: document.createElement("a")
    }
    var roll, speed;
    var rotateX, rotateY, clientX, clientY, target;

    box.className = "nav-3d";
    ele.hi.className = "front";
    ele.hi.href = "javascript:;";
    ele.github.className = "back";
    ele.github.href = "https://github.com/zhangsens";
    ele.acfun.className = "left";
    ele.acfun.href = "http://www.acfun.cn/";
    ele.bilibili.className = "right";
    ele.bilibili.href = "http://www.bilibili.com/";
    ele.taobao.className = "up";
    ele.taobao.href = "https://www.taobao.com/";
    ele.steam.className = "down";
    ele.steam.href = "http://store.steampowered.com/";
    for (let name in ele) {
        ele[name].innerHTML = `<img src="../img/ico/${name}.ico" alt="${name}">`;
        box.appendChild(ele[name]);
    }
    var target = option.ele || body;
    target.appendChild(box);

    function animation() {
        var x = rotateX + speed;
        var y = rotateY + speed;
        rotateX = x < 360 ? x : x - 360;
        rotateY = y < 360 ? y : y - 360;
        box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        roll = requestAnimationFrame(animation);
        if (speed <= 0) {
            speed = 0;
            cancelAnimationFrame(roll);
        }
    }

    speed = 2;
    rotateX = rotateY = 0;
    roll = requestAnimationFrame(animation);

    box.onmousedown = function(e) {
        cancelAnimationFrame(roll);
        if (e.target != this) {
            target = 1;
            clientX = e.clientX;
            clientY = e.clientY;
        } else {
            clientX = clientY = undefined;
        }
    }
    body.onmousemove = function(e) {
        if (e.buttons == 1 && target && clientX && clientY) {
            e.preventDefault();
            rotateX += clientY - e.clientY;
            rotateY += e.clientX - clientX;
            clientX = e.clientX;
            clientY = e.clientY;
            box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    }
    body.onmouseup = function(e) {
        if (target == 1) {
            roll = requestAnimationFrame(animation);
            target = 0;
        }
    }
}