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

obj.def(); //Returns a normal object with name,age anf function

