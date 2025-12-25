const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: true,

    Checkout: function() {
        this.isAvailable = false;
        this.title = "1984 - Checked Out";

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
