import { NumericLiteral, StringLiteral } from "typescript"

type costumObject={
    name:string,
    age:number
}
let user:costumObject;

user={
    name:"Sulavb",
    age:23,
    
}

type stringOrNumber=string|number;

let marks:stringOrNumber="hundred";

 let hobbies:string[]
 hobbies=[
    'sameeer','sulav','sakuntala'
 ]

//  function add(a:number,b:number){
//     const result =a+b;
//     return result;

//  }

//  function calculate(a:number,b:number,calc:(a:number,b:number)=>number){
//     calc(a,b);
//  }

//  calculate(2,34,add)


function addFunction(a:number,b:number){

   const add=a+b;
   return add;
    
}

type funcitonType=(c:number,d:number)=>number

function setName(c:number,d:number,addNumber:funcitonType ){
    addNumber(c,d);
}

setName(2,5,addFunction)

                           //LEARNING INTERFACES!!


// interface Credentials{
//     email:string;
//     password:number|string;
// }

// let inputFeild:Credentials;

// inputFeild={
//     email:"hello",
//     password:98
// }

// class Authorised implements Credentials{
//     email: string;
//     password: string | number;
//     userName:string;

// }

// function Login(Credentials:Authorised){

// }

// Login(new Authorised())

                               //MERGING  TYPES AND TYPES 

type Credentials1={
    email:string;
    password:string;
}

type Credentials2={
    faceID:number
    Pin:string;
}

type FinalCredentials= Credentials1&Credentials2;

let inputFeild2:FinalCredentials;

inputFeild2={
    email:"jakshdkjashd",
    password:'skskskksks',
    faceID:87987,
    Pin:"8987",

}

interface Admin{
    permission:string[]
}
interface AppUser{
    userName:string[]
}

interface AppAdmin extends Admin,AppUser{
    somethingMoreSecurityShit:string[]
}

let Userr:AppAdmin

Userr={
permission:["uasihd"],
userName:[
    "asjud"
],
somethingMoreSecurityShit:[
" I love you "
]
}

                           //BEING SPECIFIC WITH BBJECT lITERALS
type ProductCategory= 'tv'|'fridge'|'washing Machine'|1;
let addProduct: ProductCategory;


// addProduct=123;
// addProduct='Vaccum Cleaner'    
 //cant fo IT cause it's limited to only 'tv'|'fridge'|'washing Machine'|1 


                          //Adding TYPE GUARDS
                        
function PerformTransaction(TransactionAmount:number | string |boolean,TrasnsactionProduct:ProductCategory) {
    if (TrasnsactionProduct=== 'fridge'){
        //Do Something... but the main Point is We could know the value of TrasnsactionProduct is eithier frige tc or washingMachine
    }
    else(TrasnsactionProduct==='washing Machine'&& typeof TransactionAmount==='string')
     ///Do something
    
}                         
                            //GENERIC TYPES

let Products:Array<ProductCategory>;
Products=[`fridge`,`washing Machine`,`tv`]

//WE COULD HAVE ALSO DONE IT LIKE THIS]]

let Products2:ProductCategory[]
Products2=[`fridge`,`tv`,`washing Machine`]

//IT'S THE SAME BUT THIS IS WHAT GENERIC TYPE MEANS, A TYPE WHICH WORK WITH ANOTHER TYPE 
//HERE AN ARRAY IS WORKING TOGETHER WITH PRODUCTcATEGRORY TYPE WHICH WE DEFINE D EARLIEIR

function IdentityType(val:boolean|number):boolean|number{
    return val; 
}

let roles:Array<ProductCategory>

roles=['fridge','tv','washing Machine','tv'];

type DataStoragee<T>={
    storage:T[];
    add:(data:T)=>void

}