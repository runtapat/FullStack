const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: true,
};

for (let [key, value] of Object.entries(book)) {
  console.log(`${key}: ${value}`);
}

for (let key in book) {
  console.log(key, book[key]);
}

Object.entries(book).forEach(([key, value]) => {
  console.log(key, value);
});


Object.keys(book).forEach(key => {
  console.log(key ,book[key]);
});