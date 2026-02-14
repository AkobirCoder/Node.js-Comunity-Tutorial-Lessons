var person = {
    firstName: 'Akobir', // required
    lastName: 'Usmonov', // required
    city: 'Tashkent',
    age: 22,
    skills: {
        programming: ['JavaScript', 'TypeScript', 'Python'],
        design: ['Photoshop', 'Illustrator', 'Figma'],
    }
};
function greetingPerson(data) {
    return "".concat(data.firstName, " ").concat(data.lastName);
}
// --- Agar TypeScriptda `person` obyektida `firstName` xususiyati mavjud bo'masa, `greetingPerson` funksiyasini chaqirishda xato yuz beradi --- //
// --- Chunki firstName va lastName xususiyatlari `greetingPerson` funksiyasining parametrlarida required (majburiy) sifatida belgilangan --- //
// --- Shuning uchun ham TypeScript JavaScriptga nisbatan ko'proq xavfsizlikni ta'minlaydi, chunki u kodni kompilyatsiya qilishdan oldin xatolarni aniqlaydi --- //
var greeting = greetingPerson(person);
console.log(greeting); // Output: "Akobir Usmonov"
console.log('------------------------------');
