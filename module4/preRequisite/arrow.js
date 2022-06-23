
let regularFunction = function(a,b){
    console.log(a+b);
}
regularFunction(1,2);

let add = (a,b) =>{
    console.log(a + b);
}
add(9,9);

let arrowfn = () =>{
    console.log(this);
    //returns an empty object;
    //this in arrow functions depends on its outer scope 
 }

arrowfn();