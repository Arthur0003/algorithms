// есть 2 ендпоинта

// users
const users = [
  {
    name: 'Solomennikov Timofey',
    books: [1, 2, 6],
  },
  {
    name: 'Mirzoev Ruslan',
    books: [4, 6],
  },
  {
    name: 'Ivanov Ivan',
    books: [],
  },
];

// books
const books = [
  {
    id: 1,
    name: 'The Da Vinci Code',
    author: 'Dan Braun',
  },
  {
    id: 2,
    name: 'Clean code',
    author: 'Robert Martin',
  },
  {
    id: 3,
    name: 'William Shakespeare',
    author: 'Hamlet',
  },
  {
    id: 4,
    name: 'Faust',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    id: 5,
    name: 'Nineteen Eighty-Four',
    author: 'George Orwell',
  },
  {
    id: 6,
    name: 'Brave New World',
    author: 'Aldous Huxley',
  },
];

// У какого человека какие книги. Вывести списком пользователей со всеми его книгами(+ описание)
// Dmitriy=> книги: да винчи автора дена брауна, слеар кода роберта мартина...

/*
  data: [
    {
      "name":"Solomennikov Timofey",
      "books":[
        {"id":1,"name":"The Da Vinci Code","author":"Dan Braun"},
        {"id":2,"name":"Clean code","author":"Robert Martin"},
        {"id":6,"name":"Brave New World","author":"Aldous Huxley"}
      ]
    },
    {
      "name":"Mirzoev Ruslan",
      "books":[
        {"id":4,"name":"Faust","author":"Johann Wolfgang von Goethe"},
        {"id":6,"name":"Brave New World","author":"Aldous Huxley"}
      ]
    },
    {
      "name":"Ivanov Ivan",
      "books":[]
    }
  ]
  */

function mergeUserBooks() {
  const data = [];

  for (let i = 0; i < users.length; i++) {
    const tempUserData = {
      name: users[i].name,
      books: [],
    };

    for (let j = 0; j < books.length; j++) {
      if (users[i]?.books.includes(books[j].id)) {
        tempUserData.name = users[i].name;
        tempUserData.books.push(books[j]);
      }
    }
    data.push(tempUserData);
  }
  return data;
}

console.log(JSON.stringify(mergeUserBooks(), null, 2));
