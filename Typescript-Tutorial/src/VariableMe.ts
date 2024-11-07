// function addTwo(num:number):number{
//     return 5;
    
// };
// addTwo(5)

// function getWord(val:string){
//     return val.toUpperCase()
// }

// getWord("suck suck")

// function signUp(email:string,password:string,isPaid:boolean){
//     return
// }

// signUp("@gmailcom","123",true)
// export {}

// function loginUser(email:string,pass:string,boolean:boolean=false) {
    
// }

// loginUser("aisodj.com","qwejqwo")

// const hero=["ironman","spiderman"]

// hero.map((heros:string)=>{
//     return(`Heros are ${heros}`)
// })

function createUser(name:string,isPaid:boolean){

} 

createUser("Sulav",true)

type User = {
    name:string;
    num:number;
    email:string;
    creditCard?:number;      //the  question mark in creditCard"?" makes th object creditCard optional}

}

function userDetails(user:User){
    console.log(
        "name="+user.name+"number="+user.num+"email="+user.email
    )

}
userDetails({name:'sualav',num:9835414318,email:"sulovegairhe@gmail.com"
});

   //TYPE

type cardDeatails={
    cardNumber:number;
}
type CardDate={
    cardDate:number;
}

type cardConnected= cardDeatails & CardDate;

const superhero:string[]=[]

superhero.push("laksjdlas")

// UNION

const hello:number[]|string[]=["f","u","c","k"]

function chooseType(n:number|string){
    console.log(`The value is ${n}`);
    // n.toLowerCase()   //can't do cause union dosen't allow this(you don't know whether it'sa number or a string)
}

chooseType(9)



type user={
    name:string,
    id:number 
}

type admin ={
    username:string,
    id:number
}

let Sulav :user | admin={name:"sulab",id:99} //if it's a user

Sulav = {username:"asodija",id:32} //I can redeclare it again!! //if it's admin 


//enum (type ko bhitra type banauna sajilo )

 const enum airplaneSeat {   //we can write only enum NAME but it's good practise to put const befpre it Cause it produces less JS
    window="window",// we can asssign any value we like for eg number string and it's possible WE DONT HAVE TO DO IT IF WE WANT
    aisle="",
    middle=""
}

console.log(`I want ${airplaneSeat.window} seat`)

