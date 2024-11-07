function returnValue<ElementType>(number:ElementType[]){
    return(
        number[0]
    )
}

let storeValue=[1,2,3,4];
let returnFunction=returnValue<number  >(storeValue);


let strings=['1','2','3','4'];
let returnFunctions=returnValue(strings);

//THE above was for Generic Functions 
//Let's see how does it work for Generic types

type ApiResponse<t={status:number}>={
    data:t,
    isError:boolean;
}

const response:ApiResponse<{name:string}>={
    data:{ 
        name:'sidj'
    },
    isError:false
    
}
