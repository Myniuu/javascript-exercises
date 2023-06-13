const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
const getTheTitles = function(ar) {
  ar.forEach((el) => { 
    const value = Object.values(el);
    console.log(value.join(','))
  });
};

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
