let obj1={
    name:"person 1",
    age:5
};
let obj2={
    age:5,
    name:"person 1"
};

let object1=JSON.stringify(obj1);
let object2=JSON.stringify(obj2);
const isequal=(object1,object2)=>{
    const object1keys=Object.keys(object1);
    const object1value=Object.values(object1);
    const object2keys=Object.keys(object2);
    const object2value=Object.values(object2);
    if(object1keys.length !== object2keys.length){
        return false;
    }
    if(object1value==object2value){
        return false;
    }
    return true;
}
console.log(isequal(object1,object2))

