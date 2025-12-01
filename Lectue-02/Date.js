// สมมติว่านี่คือวันที่ที่ดึงมาจากฐานข้อมูล
const registrationDate = new Date('2023-09-28T10:00:00Z');

const options = {
  year: 'numeric',
  month: 'long', // 'long' = กันยายน, 'short' = ก.ย.
  day: 'numeric',
  timeZone: 'Asia/Bangkok'
};

// ใช้ locale 'th-TH' สำหรับภาษาไทยและรูปแบบวันที่
const formattedDate =
  registrationDate.toLocaleDateString('th-TH', options);

console.log(`วันที่สมัครสมาชิก: ${formattedDate}`);
// Output: วันที่สมัครสมาชิก: 17 กันยายน 2566
