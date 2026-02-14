// Asosiy type'lar: string, number, boolean
var fullName = 'John Doe';
// console.log(typeof(fullName));
console.log(typeof fullName); // type -> string
console.log('-------------------');
var salary = 10000;
var bonus = 5000;
var totalSalary = salary + bonus; // 15000 (number)
console.log(totalSalary);
console.log('-------------------');
// --- String va number'ni qo'shish --- //
// --- Bu yerda bonus1 string bo'lgani uchun, totalSalary1 ham string bo'ladi va qo'shish o'rniga concatenation (birlashtirish) amalga oshadi. --- //
// --- Natijada, totalSalary1 ning qiymati "2000010000" bo'ladi, ya'ni salary1 va bonus1 ning qiymatlari birlashtiriladi. --- //
var salary1 = 20000;
var bonus1 = '10000';
var totalSalary1 = salary1 + bonus1;
console.log(totalSalary1); // 2000010000 (string concatenation)
console.log('-------------------');
// --- Bu yerda xatolik yuz beradi, chunki isEmployed o'zgaruvchisi boolean turida e'lon qilingan va unga string qiymat berilmoqda. --- //
var isEmployed = true;
// isEmployed = '123'; // Type 'string' is not assignable to type 'boolean'. (ts2345)
