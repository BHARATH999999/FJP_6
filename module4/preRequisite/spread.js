let arr = [1,2,3];
// let arr2 = arr; // copies the address of arr to arr2
// changes in arr leads to changes in arr2 and vice versa. 

//alternative method of copying using map
// let arr2 = arr.map(function(ele){
//     return ele;
// })

//alternative method of copying using spread operator i.e ...
let arr2 = [...arr];

arr2[2] = 10;

console.log(arr);
console.log(arr2);

//spread operator with objects

let obj = {
    name : "Aman",
    address : {
        country : "USA",
        state : {
            stateName : "NYK",
            pincode : 123456
        }
    }
}

let obj2 = {... obj};
obj2.name ="Aman1";

console.log(obj.name);
console.log(obj2.name);

obj2.address.country = "INDIA"; //Changes the country name of obj1 to INDIA -- Called as Shallow Copy

console.log(obj);
console.log(obj2);