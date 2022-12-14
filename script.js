// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const ther= "ther";
// const fir = "fir";

// const arrayt = ["mon","tue","wed","ther","fir"];

// console.log(arrayt);

// arrayt.push("dddfsdfs");


// console.log(arrayt);

// for(var i=0; i<=5; i++){
//     console.log(arrayt[i]);
// }


// const toBuy = ["potato","tt","bb"];

// console.log(toBuy[1]);


// const playerName = "cho";
// const playerPoint = 222;
// const playerHandsome = false;
// const palyerFat = "little bit";

// const player = {
//     name:"cho",
//     points:10,
//     fat:true
// };
// player.lastName = "ptoto";

// player.points = player.points+10;
// console.log(player);
// console.log(player.name);
// console.log(player["name"]);



// player.fat = true;


// console.log("helllo world~~~~~~00");
// console.log("helllo world~~~~~~11");
// console.log("helllo world~~~~~~22");
// console.log("helllo world~~~~~~33");
// console.log("helllo world~~~~~~44");
// console.log("helllo world~~~~~~55");


// function sayHello(dd){
//     console.log("hello~" + dd);
// }

// alert("");

// sayHello("rrr");
// sayHello("dfd");
// sayHello("qweqwe");



// function plus(a,b){
//     console.log(a + b);
// }


// function divide(a,b){
//     console.log(a/b);
// }
// plus(8, 60);


// const player = {
//     name: "cho",
//     point:50,
//     fat:true,
//     sayHello:function(otherPat){
//         console.log("hello"+ otherPat+" ///dfd");
//     }
// }

// console.log(player.name);
// player.sayHello("meee");


// const age = 96;
// function calculateKrAge(ageOfForeigner){
//     ageOfForeigner+2;
//     return "helllo~";
// };

// const krAge = calculateKrAge(age);

// console.log(krAge);


// const calculator = {
//     plus: function(a, b){
//         return a+b;
//     },
//     divide:function(a,b){
//         return a/b
//     }
// }

// console.log(calculator.plus(1,2));
// console.log(calculator.divide(1,2));

// const age = prompt("how old are you???");

// console.log(typeof age, parseInt(age));
// const ParsAge = parseInt(age);
// console.log(typeof ParsAge);




const age = parseInt( prompt("put your age"));

if(isNaN(age)){
    console.log("숫자아님 다시 입력하셈");
}else if(age >= 18){
    console.log("숫자임 18살 이상 체크");
}else if(age < 0){
    console.log("정상적인 숫자입력요청");
}else {
    console.log("술노노");
}