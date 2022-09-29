// // // // // var x;
// // // // // x="Emre"
// // // // // console.log(x);

// // // // // let fullname="Emre Güçlü";
// // // // // console.log(fullname);

// // // // // const email="hiimglass@gmail.com";
// // // // // console.log(email);


// // // // //Değişken Türleri

// // // // //Primitive Types

// // // // var x;


// // // // //null
// // // // var y=null;

// // // // //string
// // // // var name="Emre";

// // // // //number
// // // // var age = 24

// // // // //boolean
// // // // var online = true



// // // // //Reference Types - Objects de deniyor

// // // // //Array

// // // // var cars = ["Volvo","BMW","Mercedes"]

// // // // //Objects

// // // // var person= {
// // // //     name:"Emre",
// // // //     age:24
// // // // }

// // // // //function

// // // // var isAlive = function(){
// // // //     return 0;
// // // // }

// // // // console.log(typeof isAlive);

// // // //Operatörler

// // // var sonuc;
// // // const x=60;
// // // const y=12;
// // // let z = 7;
// // // let t = 9;

// // // //Aritmetik Operatörler

// // // sonuc = x + y;
// // // sonuc = x - y;
// // // sonuc = x * y;
// // // sonuc = x / y;
// // // sonuc = x % y;
// // // sonuc = x % z;

// // // sonuc = z++; // sayıyı 1 artırdı ancak hafızada 8 olarak tuttu.

// // // sonuc = ++z; // sayıyı 1 artırdı, ekrana da yazdırdı.


// // // sonuc = --z;
// // // //Atama Operatörleri

// // // sonuc = x; // 60 değeri sonuca aktarılır

// // // sonuc += x; // sonuc = sonuc + x

// // // sonuc -= x;
// // // sonuc *= x;
// // // sonuc /= x;
// // // sonuc %= x;

// // // //Karşılaştırma Operatörleri

// // // z=9;
// // // t=9;
// // // console.log(z);
// // // console.log(t);


// // // sonuc = z == t; // doğru ise true, yanlış ise false

// // // sonuc = z === t; // typeof kontrol ediyor.

// // // sonuc = x != y; // 60 != eşit değil 12 olduğundan true döndürdü

// // // sonuc = z != t; // 9=9 olduğunda false döndürür

// // // z = 9;

// // // sonuc = z > t;
// // // sonuc = z < t;
// // // sonuc = z >= t;
// // // sonuc = z <= t;




// // // //Mantıksal Operatörler

// // // // && (And Ve)

// // // sonuc = (z > t) && (x>y);


// // // // || (Or Veya)

// // // sonuc = (z > t) || (x>y);

// // // // ! (Not  Değil)

// // // sonuc = !(z > t);

// // // console.log(sonuc);
// // // console.log(typeof sonuc);



// // // Date Object

// // var d = new Date();

// // console.log(d);


// // //set methods

// // d.setFullYear(1994);
// // d.setMonth(10);
// // d.setDate(25);

// // // get methods

// // console.log(d.getFullYear());
// // console.log(d.getMonth()); //6. indis Temmuza denk geliyor 0 dan başladığı için

// // console.log(d.getDate());
// // console.log(d.getHours());
// // console.log(d.getMinutes());
// // console.log(d.getSeconds());
// // console.log(d.getMilliseconds());

// // console.log(d.getDay()); // Pazar günü 0. indis olduğu için Pazatesi 1....

// //String Metotları

// const ad = "Emre";
// const soyad = "Güçlü";

// var x = ad + " " + soyad;

// // string concat

// x = ad.concat(" ",soyad);

// //string lenght

// // x = ad.length;
// // x = soyad.length;

// //string uppercase

// // x = ad.toUpperCase();
// // x = soyad.toUpperCase();


// //string indexof
// //x = x.indexOf("");


// //string substring

// // x = x.substring(0,3);

// // x = x.slice(5);

// //string replace

// x = x.replace("Emre", "Ceycey")

// //w3 school javascript tutorialda diğer tüm metotlar var


// console.log(x);
// console.log(typeof x);

//Number Metotları

var x = 10;
x = "10";

x = Number ("10");

x = isNaN("10");


// parseInt parseFloat

var sayi = 24.21393283;

// sayi = parseInt(sayi);

// sayi = parseFloat(sayi);


    // precisian fixed

sayi = Math.abs(-150)