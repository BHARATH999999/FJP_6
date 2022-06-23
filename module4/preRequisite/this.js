// this keyword is for reference purpose to any object
// this keyword's value will depend upon how it is called ?
// Two types -->
// 1.Function Invocation
// 2.Method Invocation


console.log(this); // Outputs an empty object


function abc(){
    console.log("Inside a function 'this' acts as GLobal Object",this);
}
abc(); //function invocation


let obj = {
    name : "Amam",
    age : 23,
    // def : function(){
    //     // console.log(this);
    //     function klm(){
    //         console.log(this);
    //     }
    //     klm(); // function invocation
    // }

    test : function(){
        this.def(); //method invocation
    },

    def : function(){
        console.log(this);
    }
}

obj.test(); //method invocation

// obj.def(); //method invocation
//Returns a normal object with name,age and function
  
// let ghi = obj.def; //making a copy of def function to ghi, now ghi is a function
// ghi(); //function invocation
// //Now this acts as global object