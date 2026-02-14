// --- Typescriptda type'larni static qilib yaratadi --- //

let fullName = 'John Doe';

// fullName = 123; // bu holatda xatolik chunki fullName yuqorida string type qilib yaratilgan

fullName = '123456789'; // bu holatda xatolik yo'q, chunki string type'da qiymat berilmoqda

// --- Quyidagi kodlarda o'zgaruvchi qiymatlarini o'zgartirishda faqatgina daslabki holatda e'lon qilingan type'da qiymat berish kerak --- //

let text: string = 'Hello world';
let isMarried: boolean = false;
let age: number = 22;

text = 'Assalomu alaykum';
isMarried = true;
age = 40;

console.log(text); // --- Assalomu alaykum --- //
console.log('-------------------');
console.log(isMarried); // --- true --- //
console.log('-------------------');
console.log(age); // --- 40 --- //
console.log('-------------------');