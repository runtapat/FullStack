const message = "Hello, World!";
const aeiou = ['a', 'e', 'i', 'o', 'u'];
for (let char of message) {
    aeiou.forEach(vowel => {
        if (char === vowel) {
            console.log(char);
        }
    });
}