// --- Function declaration uchun oddiy misol --- //
function logger() {
    console.log('Logging...');
}
logger(); // --- Logging... --- //
console.log('-------------------');
// --- Quyidagi misolda esa, funksiya parametrlar bilan ishlaydi --- //
// --- Ammo TypeScriptda biz funksiya parametrlarining turlarini ham ko'rsatishimiz kerak --- //
// --- any - bu har qanday turdagi qiymatni qabul qilishi mumkinligini bildiradi --- //
// --- @ts-ignore - Bu xatolikni e'tiborsiz qoldirish uchun ishlatiladi, lekin uni ishlatish tavsiya etilmaydi --- //
// --- Har doim aniq turlarni ko'rsatish yaxshidir, chunki bu kodning o'qilishi va xatoliklarni aniqlashni osonlashtiradi --- //
function getName(firstName, lastName) {
    console.log("My name is ".concat(firstName, " ").concat(lastName));
}
// --- Bu yerda xatolik yuz beradi, chunki birinchi parametr string turida bo'lishi kerak, lekin biz unga number turidagi qiymat berdik --- //
// getName(123, 'Usmonov'); 
getName('Akobir', 'Usmonov'); // --- My name is Akobir Usmonov --- //
console.log('-------------------');
// --- void - bu funksiya hech qanday qiymat qaytarmasligini bildiradi, ya'ni u faqat bajariladigan kodni o'z ichiga oladi va hech qanday natija qaytarmaydi --- //
// --- Agar funksiya void turida bo'lsa, u holda return bayonoti ishlatilmaydi yoki agar ishlatilsa, u holda hech qanday qiymat qaytarilmaydi --- //
// --- Quyidagi misolda, sayHello funksiyasi string turida qiymat qaytaradi, shuning uchun biz return bayonotida string qiymatni qaytaramiz --- //
// --- Agar biz return bayonotida boshqa turdagi qiymatni qaytarsak, xatolik yuz beradi, chunki bu funksiya string turida qiymat qaytarishi kerak --- // 
function sayHello(name, surname) {
    // --- Bu yerda xatolik yuz beradi, chunki funksiya string turida qiymat qaytarishi kerak, lekin biz unga number turidagi qiymat berdik --- //
    // return 123;
    return "Hello, ".concat(name, " ").concat(surname, "!");
}
var greeting = sayHello('Behruz', 'Solihov');
console.log(greeting); // --- Hello, Behruz Solihov! --- //
console.log('-------------------');
var checkAdult = function (age) {
    if (age >= 18) {
        return true;
    }
    return false;
};
var isAdult1 = checkAdult(20);
var isAdult2 = checkAdult(15);
console.log(isAdult1); // --- true --- //
console.log(isAdult2); // --- false --- //
console.log('-------------------');
