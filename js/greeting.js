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




// const age = parseInt( prompt("put your age"));

// if(isNaN(age)){
//     console.log("숫자아님 다시 입력하셈");
// }else if(age >= 18){
//     console.log("숫자임 18살 이상 체크");
// }else if(age < 0){
//     console.log("정상적인 숫자입력요청");
// }else {
//     console.log("술노노");
// }


//document.title = "change title!";

// const title = document.getElementById("title");
// title.innerText = "chage";

// console.log(title.id);
// console.log(title.className);


// const hellos = document.getElementsByClassName("classnametest");

// console.log(hellos);

// const hellos = document.getElementsByTagName("h1");

// console.log(hellos);


// const hellos = document.querySelector(".classnametest h1");

// console.log(hellos);


// const hellos = document.querySelector(".classnametest h1");
// const helloos = document.getElementsByClassName("classnametest");

// console.log(hellos);

// console.log(helloos);

// hellos.innerText = "change hellllos~";

//const title = document.querySelector("div.hello:fitst-child hi");

// const title = document.querySelector("div.hello:first-child h1");

//  console.dir(title);
// // title.style.color = "red";

// function handleTitleClick(){
// //    console.log("title was handled");
//         title.style.color = "red";
// }

// function handleMouseEnter(){
// //    console.log("in... in");
// title.innerText = "mouse is here ";
// }

// function handleMouseLeave(){

//     title.innerText = "mouse is bye byew~~~";
//   //  console.log("bye bye");
// }

// function handleWindowResize(){
//     document.body.style.backgroundColor = "gray";
// }


// function handleWindowCopy(){
//     alert("hellllllo");
// }

// //title.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick;
// title.addEventListener("mouseenter", handleMouseEnter);

// title.addEventListener("mouseleave", handleMouseLeave);



// window.addEventListener("resize", handleWindowResize);

// window.addEventListener("copy",handleWindowCopy );

// const title = document.querySelector("div.hello:first-child h1");
// console.log(title.style.color);
// console.log("dddd");

// title.addEventListener("click", handleTitleClick);

// function handleTitleClick(){
//     const clickconst = "active";
//     title.classList.toggle(clickconst);

    // if(title.classList.contains(clickconst)){
    //     title.classList.remove(clickconst);
    // }else{
    //     title.classList.add(clickconst);
    // }


    // if(title.className == "active"){
    //     title.className = "";
    // }else{
    // title.className = "active";
    // }


// //    console.log("title was handled");
//         // title.style.color = "red";

//         console.log(title.style.color);

//         const orgcolor = title.style.color;
//         let chagecolor ;


//         if(orgcolor == "blue"){
//             chagecolor = "red";
//         }else{
//             chagecolor = "blue";
//         }

//         title.style.color = chagecolor;
//}



//const loginForm = document.getElementById("login-form");
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");


//const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");

//loginButton.addEventListener("click", loginButtonClickEvent);

// function loginButtonClickEvent(){
//     const value = loginInput.value;

//     if(value == ""){
//         alert("plesss insert id");
//     }
    
//     // else if (value.length >= 15){
//     //     alert("toooo long");


//     // }
//     console.log(loginInput.value);
// }



const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


// const link = document.querySelector("a");

function onLoginSubmit(event){
    // const username = loginInput.value;
    // console.log(username);

    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    paintFrettins(username);
//    greeting.innerText = "helllo " + username;
}

// function linkClickEvent(event){
//     event.preventDefault();
//     console.dir(event);
// //    alert("test!!");
// }

// link.addEventListener("click", linkClickEvent);

function paintFrettins(username){
    greeting.innerText = `helllo ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

}else{
    paintFrettins(savedUserName);
    console.log(savedUserName);
}
