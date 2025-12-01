// Input ที่มีช่องว่างเกิน
const fullName = "   Nantapat    Wanitthanasiri   ";

// 1. .trim() เพื่อตัดช่องว่างหน้า–หลัง
const cleanedName = fullName.trim();

// 2. .split(' ') เพื่อแยกสตริงเป็น Array
const nameParts = cleanedName.split(' ');
// 3. .filter(Boolean) เพื่อกรองช่องว่างออก
const finalParts = nameParts.filter(Boolean);

// 4. ตั้งชื่อแรกออกมา
const firstName = finalParts[0]; // "Nantapat"
const lastName = finalParts[1];
console.log(cleanedName);
console.log(nameParts);
console.log(finalParts);
console.log(`สวัสดี, ${firstName}!`);
console.log(`สวัสดี, ${lastName}!`);
// Output: สวัสดี, Nantapat! 