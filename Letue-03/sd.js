function countString(input, type) {
    const aeiou = ['a', 'e', 'i', 'o', 'u'];
    let i = 0
    if (type == 'w'){
            if (input == "") return 0
        return input.trim().split(" ").filter(word => word !== "").length   
    }
    if (type == 'v'){
        return input.toLowerCase().split("").filter(ch => aeiou.includes(ch)).length;
    }
    if (type == "c"){
        return input.trim().split("").filter(word => word !== "").length
    }
    
}
// Example usage
console.log("Word count:", countString(" Hello world, how are you? ", "w")); // Output: 5
console.log("Character count:", countString("Hello world, how are you?", "c")); // Output: 21
console.log("Vowel count:", countString("Hello world, how are you?", "v")); // Output: 8
module.exports = countString;
