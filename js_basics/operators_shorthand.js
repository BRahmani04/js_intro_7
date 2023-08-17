

let a = 10, b = 5, c = 15, d = 12, e =7, f = 8;

a *= 5; // a = a * 5;

console.log(a *= 5); // 50 == it assignets a to 50 even tho is in consol.log

console.log(a); // 50

b /= 5; // b = b / 5

console.log(b); // 1

console.log(d %= 10); //2
console.log(d); //2

c %= f *= 2; // first you multiply f * 2 = 16 and the reminder is 15 because 15 is less then 16 then the remainder is always itself
console.log(c); // 15

e **= 2; // 7 multypley by 7 e = e ** 2;

 console.log(e); //49

