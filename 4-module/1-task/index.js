let friends = [
  {
      firstName: 'Artsiom',
      lastName: 'Mezin'
  },
  {
      firstName: 'Ilia',
      lastName: 'Kantor'
  },
  {
      firstName: 'Christopher',
      lastName: 'Michael'
  }
];


function makeFriendsList(friends) {
  let ul = document.createElement('ul'); // создали ul
  for (let i = 0; i < friends.length; i++) { // 
    let li = document.createElement('li'); // создали li
    li.innerHTML = `${friends[i].firstName} ${friends[i].lastName}`; // добавляем в li из массива
    ul.append(li);
  }
  return ul; // возвращает ul
}