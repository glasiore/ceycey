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

console.log(a);

// // dataTypes
// // operators
// // stirng operations toUpperCase gibi length trim stirng merge cesitleri
// // properties ??
// // obje tipleri
// // 5 tip

// --- VARIABLES ------------------------------------------------------------------------

var valueNull = null;
var valueUndefined; // mulakat

var valueBoolean; // true || false 1 || 0, 102 3 0 -1
var valueString; // 'Ceyhun', "Ceyhun", `123`,
var valueNumber; // 10.2 || 5 || 99999999999999999
var valueArray; // [deger, dege1, deger2]
var valueObject;

// any type in one value
var val = "ceyhun" || 10.2 || true;
// array examples
var nameList = ["ceyhun", "emre", "aybike"];
var ageList = [28, 30, 22];
var inTurkey = [true, false, 1];
var arrayInArray = [
  [0, 1, 2],
  [1, 0, 3],
  [2, 3, 0],
]; // 3 x 3 matris

// object
var ceyhunObject = {
  name: "ceyhun",
  surname: "celik",
  age: 18,
  inTurkey: true,
};

console.log(ceyhunObject, "ceyhun degerlerini goster ");
console.log(
  ceyhunObject.name,
  "ceyhun objesindeki name alanını goster acıklama!!!!"
);

var personObj = {
  name: null,
  surname: null,
};

var ceyhunObj2 = personObj;
ceyhunObj2.name = "ceyhun";
ceyhunObj2.surname = "celik";

var emreObject = {
  name: "emre",
  surname: "guclu",
  age: 17,
  inTurkey: false,
  cityHaveBeenList: ["canakale", "eskisehir", "frankurt"],
  skills: {
    run: 1,
    fire: 10,
    heat: 20,
  },
  school: null,
};
console.log("emre degerlerini goster ", emreObject);
console.log(
  "emre objesindeki name alanını goster acıklama!!!!",
  emreObject.name
);
console.log("run skill value", emreObject.skills.run);
// console.log("undefined of property", emreObject.school.name); // hatalı satır 
console.log(
  "run scool name",
  emreObject && emreObject.school && emreObject.school.name
); // undefined of property error

// object in array examples
var personList = [ceyhunObject, emreObject];
var personList_2 = [
  {
    name: "emre",
    surname: "guclu",
    age: 17,
    inTurkey: false,
  },
  {
    name: "ceyhun",
    surname: "celik",
    age: 18,
    inTurkey: true,
  },
  {
    name: "emre",
    surname: "guclu",
    age: 17,
    inTurkey: false,
    cityHaveBeenList: ["canakale", "eskisehir", "frankurt"],
    skills: {
      run: 1,
      fire: 10,
      heat: 20,
    },
    school: null,
  },
];

console.log('--------------- index exampless ------ ')

console.log(personList_2[0], 'first index values for personList_2');
console.log(personList_2[1], 'second index values for personList_2');
console.log(personList_2[2], 'second index values for personList_2');

console.log(personList_2.length, 'personList_2 item count');
console.log(personList_2[personList_2.length - 1], 'personList_2 last item values');


console.log(personList_2[0].name, 'first item name ');
console.log(personList_2[2].skills.fire, 'third item fire skill value ');
console.log(personList_2[personList.length - 1], 'personList_2 last item values');

console.log('--------------- index exampless end ------ ')

function getDoblue(val1) {
  if (val1 !== undefined) {
    return val1 * 2;
  }
  return 0;
}

// int
// double
// float
// Integer
// String
// char

// ve veya
// deger1 deger 2

// true && true => true
// true && false => false

// false && true => false
// false && false => false

// true || false => true

// true || true => true
// false || true=> true
// false || false => false

// en az bir tane  personList_2 benzeri bi obje array yapısı üret gercek hayttan ornek bul tip: kutuphane sistemi 

// kitapTipinde 
// liste icinde en az 3 kitap olsun 
// kitap tanımlanması gereken ozellikleri 
// category array
// author string
// publishDate string datetype iso8601 tipinde YYYY-MM-DDTHH:mm:ss.Z
// language: string
// stock number 
// isAvailable boolean
// pressProperties object icerisnde en az iki ozellik 
// -> pressProperies.firstPublishDate string iso8601 
// -> pressProperies.paperType string  


// her kitabin kategorilerini adını yazarını ekrana yazdır tip console.log ile 
// alert(); bi tane de ekrana bunla yazdır diyelim 


//////// 
////////


