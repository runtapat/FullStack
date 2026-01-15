const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: true,

    Checkout: function() {
        for let i in book
        }

    },
    CheckIn: function() {
        this.isAvailable = true;
        this.title = "1984 - Available";
    }
};

console.log(book.isAvailable);
book.Checkout();
console.log(book.isAvailable);
console.log(book.title);
book.CheckIn();
console.log(book.isAvailable);
console.log(book.title);
