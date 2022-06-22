//Array

let arr = [1,2,4];

/*
Normal Method -->
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];
*/

//destructuring -->
    // let [a,b,c,d] = arr; // Since arr is of length 3 gives d as undefined

    let [a,b = 10,c,d = 0] = arr; //default parameters for b and d as 10 and 0 respectively
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

//Object 

let obj ={
    name : "Adam",
    state : "New York",
    pincode : 12345
}

// let{state,name} = obj; //Searches for state and name keys in obj

//to rename name as firstNAme
let{state,name : firstName} = obj;

console.log(firstName);
console.log(state);

//Nested Object

let obj4 = {
    name : "Adam",
    address :{
        country : "USA",
        state : {
            stateName : "NYK",
            pincode : 234567
        }
    }
}

let {name} = obj4;
console.log(name);

let{address : {country:cd}} = obj4;
console.log(cd);

let{address : {state:{pincode : cb}}} = obj4;
console.log(cb);