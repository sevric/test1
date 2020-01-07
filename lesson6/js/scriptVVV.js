"use strict";

let menuDiv = document.querySelector(".menu-item"),
    
    // div с классом "column" через соседний селектов CSS
    columnDiv = document.querySelector("div.column + div.column"),
    
    // блок с рекламмой
    banner = document.querySelector(".adv"),
    
    // элемент, куда нужно вставить ответ на вопрос
    userAnswerBlock = document.querySelector("#prompt"),

    // ответ на вопрос
    userAnswer = prompt("Как вы относитесь к технике apple"),

    // Второй пункт (третий по счету) - "замещатель"
    replacerItem = document.querySelectorAll(".menu-item")[2],
    // Третий пункт (второй по списку) - "замещаемый"
    replacedItem = document.querySelectorAll(".menu-item")[1],
    
    // создаем 5-й элемент
    fifthEl = document.createElement("li");

fifthEl.className = "menu-item";
fifthEl.innerHTML = "Пятый пункт";

// 1
// заменяем в списке 2-й пункт 3-тьим
replacedItem.replaceWith(replacerItem);

// вставляем на место 2-й пункт, замененный в предыдущей команде
document.querySelectorAll(".menu-item")[1].after(replacedItem);

//вставляем 5-й пункт
document.querySelectorAll(".menu-item")[3].after(fifthEl);

// 2
// меняем фон
document.body.style.backgroundImage = "url(./img/apple_true.jpg)";

// 3
// добавляем слово к заголовку
// document.body.querySelector("#title").innerHTML[2].after("<b>подлинную</b>");

// 4
// удаляем рекламу
columnDiv.removeChild(banner);

// 5
// записываем полученный выше ответ в элемент
document.querySelector("#prompt").append(userAnswer);
// document.querySelector("#prompt")
