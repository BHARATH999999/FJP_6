console.log(this); // Outputs an empty object


function abc(){
    console.log("Inside a function 'this' acts as GLobal Object",this);
}
abc();


let obj = {
    name : "Amam",
    age : 23,
    def : function(){
        console.log(this);
    }
}

obj.def(); //Returns a normal object with name,age and function

let ghi = obj.def; //making a copy of def function to ghi, now ghi is a function
ghi(); //Now this acts as global object