const bookObj = {
    title: "Becoming",
    author: "Michelle Obama",
    isAvailable: false
};
const bookJson = JSON.stringify(bookObj);
console.log(bookJson);
console.log(typeof bookJson); //string

const bookParse = JSON.parse(bookJson);
console.log(bookJson);
console.log(bookParse.title);
console.log(bookParse.author);
console.log(typeof bookParse); //object
