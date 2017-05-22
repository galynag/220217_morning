var test2 = document.querySelector('#popup');
var test2Check = document.querySelector('#popup input');
var ls = localStorage["popupChecked"];
var rePopup = document.querySelector('#re-popup');
var outTask1=document.querySelector('#out');

function task2() {
    this.checked==true ? localStorage.setItem("popupChecked", true): localStorage.removeItem("popupChecked");
};

function task1() {
    event.target.className == '' ? outTask1.innerHTML='У элемента нет класса. Это:<b>'+event.target.tagName+'</b>' : outTask1.innerHTML='Класс данного элемента: <b>'+event.target.className+'</b>';
};

function popupBox() {
    test2Check.checked=false;
    rePopup.checked=false;
    ls == undefined ? test2.style.display='block': test2.style.display='none';
};

window.onload = setTimeout(popupBox,500);
document.addEventListener('click',task1);
test2Check.addEventListener('click',task2);
rePopup.onclick=function() {
    this.checked==true ? localStorage.removeItem("popupChecked") : localStorage.setItem("popupChecked", true);
};