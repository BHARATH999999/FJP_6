
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
    //this in arrow functions depends on its outer (parent or function)scope i.e lexical scope wise
    // see below obj example
}
arrowfn();

let obj = {
    name : "Aman",
    age : 23,
    showDetails : function(){
        console.log(this.name + " "+this.age); // returns Aman 23
    },

    showDetailsArrow:()=>{
        console.log(this); // returns {}
        console.log(this.name + " "+this.age); // returns undefined undefined as it has no parent function
    }
}

obj.showDetails();
obj.showDetailsArrow();