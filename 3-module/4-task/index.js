function showSalary(users, age) {
  let string = ""; // создаем пустую строку
  users.forEach((item)=>{ // перебор по массиву
    if (item.age <= age) { // если возраст <= age, то  
      string = string + item.name + ", " + item.balance + "\n"; // = имя+запятая+ЗП+перенос
    }
  });
  return string.slice(0, -1); // возвращаем все строками сверху вниз, от первого до полследнего
}