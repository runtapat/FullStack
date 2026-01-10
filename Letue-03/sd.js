function countString(input, type) {
    const aeiou = ['a', 'e', 'i', 'o', 'u'];
    let i = 0
    if (type == 'w'){
        const trimm = input.trim();
        console.log(trimm);
            if (trimm == "") return 0
        trimm.split(" ").filter(word => word !== "").length
        console.log(input.trim().split(" "));
        
    }
    if (type == 'v'){
        for (let char of input.toLowerCase()) {
            aeiou.forEach(vowel => {
                if (char === vowel) {
                    i += 1
                }
            })
      
        }
        return i
    }
    console.log("SDSDSD",input.split("").filter(word => word !== " ").length);
}
// Example usage
console.log("Word count:", countString(" Hello world, how are you? ", "w")); // Output: 5
console.log("Character count:", countString("Hello world, how are you?", "c")); // Output: 21
console.log("Vowel count:", countString("Hello world, how are you?", "v")); // Output: 8
module.exports = countString;
