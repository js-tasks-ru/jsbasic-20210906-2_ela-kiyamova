function highlight(table) { // функция, которая изменяет таблицу
  let numberGender = findNumber(table, 'Gender'); // находим ячейку Gender
  let numberAge = findNumber(table, 'Age'); // находим ячейку Age
  let trList = table.querySelectorAll('tbody tr'); // находим строки в таблице

  for (let i = 0; i < trList.length; i++) { // перебираем эти строки
    let currentTr = trList[i]; // строка в коллекции
    let tdList = currentTr.querySelectorAll('td'); // находим в currentTr ячейку
    let available = currentTr.querySelector('[data-available]'); // находим в currentTr ячейку с data-атрибутом

    if (available) {
      available.dataset.available === 'true' ? currentTr.classList.add('available') : currentTr.classList.add('unavailable'); // у ячейки Status добавляем/убираем класс

    } else {
      currentTr.hidden = true; // иначе ставим атрибут hidden, если атрибута data-available нет
    }

    checkMaleFemale(tdList, numberGender, currentTr);
    checkAge(tdList, numberAge, currentTr);
  }
}


function findNumber(table, str) { //функция, которая возвращает первого ребенка в нижнем регистре
  let listTdHead = table.firstElementChild.querySelectorAll('td'); // находим в таблице всех первых детей

  for (let i = 0; i < listTdHead.length; i++) { // перебираем первые ячейки
    if (listTdHead[i].innerHTML.toLowerCase() === str.toLowerCase()) { 
      return i; // возвращаем i, если в нижнем регистре
    }

  }
}

function checkMaleFemale(tdList, numberGender, currentTr) {
  if (tdList[numberGender].innerHTML === 'm') { 
    currentTr.classList.add('male'); // добавить класс male

  } else if (tdList[numberGender].innerHTML === 'f') {
    currentTr.classList.add('female'); // добавить класс female
  }
}


function checkAge(tdList, numberAge, currentTr) {
  if (tdList[numberAge].innerHTML < 18) { //
    currentTr.style.textDecoration = 'line-through'; 
  }
}