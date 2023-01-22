////Task 1: Simple Programs todo for variables

// //1.Declare four variables without assigning values and print them in console
// let a;
// let b;
// let c;
// let d;
// console.log(a,b,c,d);
// //output:
// //undefined undefined undefined undefined
//------------------------------------------------------------------------------------
//2.How to get value of the variable myvar as output
//   var myvar= 121;
//    console.log(myvar);
//output:
//121
//------------------------------------------------------------------------------------
//3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
//   let firstName = 'RAGUL';
//   let lastName = 'PALANISAMY';
//   let maritalStatus = 'unmaried';
//   let country = 'India';
//   let age = 24;
//   console.log(firstName);
//   console.log(lastName);
//   console.log(maritalStatus);
//   console.log(country);
//   console.log(age);

//output:
/*RAGUL script.js:16:11
PALANISAMY script.js:17:11
unmaried script.js:18:11
India script.js:19:11
24
*/
//------------------------------------------------------------------------------------
//4. Declare variables to store your first name, last name, marital status, country and age in a single line
// let firstName = 'RAGUL';
// let lastName = 'PALANISAMY';
// let maritalStatus = 'unmaried';
// let country = 'India';
// let age = 24;
// console.log(firstName,lastName,maritalStatus,country,age);
// //output:
// //RAGUL PALANISAMY unmaried India 24

//------------------------------------------------------------------------------------
// //5. Declare variables and assign string, boolean, undefined and null data types
// let string='Ragul';
// let itstrue=true;
// let a;
// let n=null;
// console.log(typeof(string));
// console.log(typeof(itstrue));
// console.log(a);
// console.log(n);
// //output:
// /*string
//  boolean
//  undefined
//  null
// */

//------------------------------------------------------------------------------------


//6. Convert the string to integer
// let number = '18'
// //parseInt()
// let result = parseInt(number);
// console.log(typeof(result),result);
// //Number()
// console.log(typeof(Number(number)),Number(number));
// //Plus sign(+)
// console.log(typeof(+number),(+number));
//output:
/*
number 18
number 18
number 18
*/
//------------------------------------------------------------------------------------
// //7. Write 6 statement which provide truthy & falsey values.
// console.log(1=='1');
// console.log('1'==[1]);
// console.log(1==[1]);
// console.log(1==='1');
// console.log('1'===[1]);
// console.log(1===[1]);
// //output:
// /*
//  true
//  true
//  true
//  false
//  false
//  false
// */
//----------------------------------------------------------------------------------------
//Task 2: Simple Programs todo for Operators

//    //1. Square of a number
//     let a = 2;
//     let result=a**2;
//     console.log(result);
//     //output
//     //4
//------------------------------------------------------------------------------------
//    //2. Swapping 2 numbers
//    let a=2;
//    let b=6;
//    let c=a;
//    a=b;
//    b=c;
//    console.log(a,b);
//    //output:
//    //6 2
//---------------------------------------------------------------------------------------------

//    //3. Addition of 3 numbers
//    let a = ;
//    let b = 4;
//    let c = 7;
//    let addition=a+b+c;
//    console.log(addition);
//    //output:
//    //13
//---------------------------------------------------------------------------------------------
//    //4. Celsius to Fahrenheit conversion
//    let celsisus = 20 ;
//    let Fahrenheit=celsisus*(9/5)+32;
//    console.log(Fahrenheit);
//    //output:
//    //68
//---------------------------------------------------------------------------------------------
//    //5. Meter to miles
//    let meter = 20000;
//    //1 meter convert to 0.0006261
//    let miles = meter*0.000621;
//    console.log(miles);
//    //output:
//    //12.42
//---------------------------------------------------------------------------------------------
//    //6. Pounds to kg
//    let pounts =200;
//    let kg = pounts/2.205;
//    console.log(kg);
//    //output:
//    //90.70294784580499
//---------------------------------------------------------------------------------------------
//    //7. Calculate Batting Average
//    let array = [60,30,45,90,87,100];
//    let sum = 0;
//    for(let i = 0;i<array.length;i++){
//        sum+=array[i];
//    }
//    let result = (sum/array.length);
//    console.log(Math.floor(result));
//    //output:
//    //68
//---------------------------------------------------------------------------------------------
//    //8. Calculate five test scores and print their average
//    let array = [450,250,590,660,220];
//    let sum = 0;
//    for(let i = 0;i<array.length;i++){
//        sum+=array[i];
//    }
//    let result = (sum/array.length);
//    console.log(Math.floor(result));
//    //output:
//    //434
//---------------------------------------------------------------------------------------------
//    //9. Power of any number x ^ y.
//    let x = 4;
//    let y = 3;
//    let result = x**y;
//    console.log(result);
//    //output:
//    //64
//---------------------------------------------------------------------------------------------
//   //10.  Calculate Simple Interest
//   let p = 10000;
//   let n = 1;
//   let r = 10;
//   let si = (p*n*r)/100;
//   console.log(si);
//   //output:
//   //1000
//---------------------------------------------------------------------------------------------
    // //11.Calculate area of an equilateral triangle
    // let a = 10;
    // let triangle = ((Math.sqrt(3))/4)*(a**2);
    // console.log(triangle);
    // //output:
    // //43.30127018922193
//---------------------------------------------------------------------------------------------
//    //12. Area Of Isosceles Triangle
//    let b = 2;
//    let h = 4;
//    let area =((b*h)/2);
//    console.log(area);
//    //output:
//    //4
//---------------------------------------------------------------------------------------------
//    //13. Volume Of Sphere
//    let r = 20;
//    let Volume = (4/3)*Math.PI*(r**3);
//    console.log(Volume);
//    //output:
//    //33510.32163829113
//---------------------------------------------------------------------------------------------
//    //14. Volume Of Prism
//    //Rectangular prisms
//    let l=20;
//    let b=10;
//    let h=5;
//    let Volume=l*b*h;
//    console.log(Volume);
//    //output:
//    //1000

   //---------------------------------------------------------------------------------------------
//   //15. Find area of a triangle.
//    let b = 8;
//    let h = 4;
//    let area =((b*h)/2);
//    console.log(area);
//    //output:
//    //16
//---------------------------------------------------------------------------------------------
//    //16. Give the Actual cost and Sold cost, Calculate Discount Of Product
//    let ActualCost=10000;
//    let soldCost=8000;
//    let Discount=(ActualCost-soldCost)/(100);
//    console.log(Discount,'%');
//    //output
//    //20%
//---------------------------------------------------------------------------------------------
//    //17. Given their radius of a circle and find its diameter, circumference and area.
//    let radius=20;
//    let diameter=radius*2;
//    console.log('Diameter=',diameter);
//    let circumference=(2*(Math.PI)*(radius));
//    console.log('circumference=',circumference);
//    let area=Math.PI*(radius**2);
//    console.log('area=',area);
//    //output:
//    /* Diameter= 40  
//    circumference= 125.66370614359172
//    area= 1256.6370614359173  */

//---------------------------------------------------------------------------------------------
    // //18.Given two numbers and perform all arithmetic operations.
    // let a=30;
    // let b=20;
    // let sum=a+b;
    // console.log("+",sum);
    // let sub=a-b;
    // console.log('-',sub);
    // let multiplication=a*b;
    // console.log('*',multiplication);
    // let division=a/b;
    // console.log('/',division);

    // //output:
    // /* + 50
    //   - 10
    //   * 600
    //   / 1.5
    //   */
//---------------------------------------------------------------------------------------------
//    /*
//     19.Display the asterisk pattern as shown below(No loop needed):
//     *****
//     *****
//     *****
//     *****
//     *****
//     */
//     function printPattern(n)
//     {
//         if (n == 0 || n < 0)
//         {  
//             return;
//         }
//          printPattern(n - 1);
//         console.log('*****');
//     }
     
//     let n = 5;
//     printPattern(n);
//      //output:
//      /*
//      *****
//      *****
//      *****
//      *****
//      *****
//      */

    //---------------------------------------------------------------------------------------------
//   //20.Calculate electricity bill?
//    /* For example, a consumer consumes 100 watts per hour daily for one month. 
//    Calculate the total energy bill of that consumer if per unit rate is 10?
//     */
//    let kwh=100*1*30
//    let unit=kwh/1000;
//    let bill=unit*10;
//    console.log(bill);
//    //output:
//    //30  
//---------------------------------------------------------------------------------------------
//    //21. Program To Calculate CGPA
//    let s1=9.2;
//    let s2=8.9;
//    let s3=7.3;
//    let s4=5.6;
//    let s5=7.8;
//    let s6=7.1;
//    let s7=9.1;
//    let s8=8.2;
//    let cgpa=(s1+s2+s3+s4+s5+s6+s7+s8)/8;
//    console.log(cgpa);
//    //output:
//    //7.9
   
//---------------------------------------------------------------------------------------------
//Task 3: Simple Programs todo for Condition , Looping and Arrays

//  //1.Get the first item, the middle item and the last item of the array
//  let array=[1,2,3,4,5,6,7,8,9];
//  console.log(array[0]);
//  if(array.length%2==0){
//      let a=Math.ceil(array.length/2);
//      console.log(array[a-1],array[a]);
//     }else{
//      console.log(Math.ceil(array.length/2));
//     }
// console.log(array[array.length-1]);

// //output:
// /* 1
//    5
//    9
// */
//---------------------------------------------------------------------------------------------
// //2. Add your name to the end of the friends array, and add another name to beginning.
// let fnames=['guna','bala','arun','karthi'];
// fnames.push('ragul');
// fnames.unshift('gnnaprakash');
// console.log(fnames);

// //output:
// //(6)Â ['gnnaprakash', 'guna', 'bala', 'arun', 'karthi', 'ragul']

//---------------------------------------------------------------------------------------------
// // 3. Add Mr or Ms to the names in the friends array.
// let friendsname=['Guna-m','Bala-m','Arun-m','Karthi-m','Renuka-w','Gomathi-w'];
// let friends=[];
// for(let i=0;i<friendsname.length;i++){
//     let name=friendsname[i].split('');
//     let length=name.length-2;
//     let line='';
//     if(name[name.length-1]=='m'){
//      let a=name.slice(0,length).join('');
//       line="Mr."+a;
//       friends.push(line);
//     }else if(name[name.length-1]=='w'){
//         let a=name.slice(0,length).join('');
//         line="Ms."+a;
//         friends.push(line);
//     }
// }
// console.log(friends);
// //output:
// //(6)Â ['Mr.Guna', 'Mr.Bala', 'Mr.Arun', 'Mr.Karthi', 'Ms.Renuka', 'Ms.Gomathi'];

//---------------------------------------------------------------------------------------------
// // 4. Concat all the names the friends array and return as comma â€œ,â€ seperated string.
// let friends=['Guna','Bala','Arun','Karthi'];
// let line=friends[0];
// let array=[];
// let result=[];
// for(let i=1;i<friends.length;i++){
//   let length=friends[i];
//   array.push(length);
//   line=line.concat(friends[i]);
// }
// console.log(line);
// console.log(friends);
// //output:
// ?* 
//   GunaBalaArunKarthi
//  (4)Â ['Guna', 'Bala', 'Arun', 'Karthi']
// */

//---------------------------------------------------------------------------------------------
// // 5. Find the friends names who has letter â€˜aâ€™ and return the list.
// let friends=['Guna','guru','Bala','Gokul','Karthi'];
// let array=[];
// for(let i=0;i<friends.length;i++){
//   let a=friends[i];
//   for(let j=0;j<a.length;j++){
//     if(a[j]=='a'){
//       array.push(a);
//       break;
//     }
//   }
// }
// console.log(array);
// //output:
// //(3)Â ['Guna', 'Bala', 'Karthi']
//---------------------------------------------------------------------------------------------
// // 6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.
// let friends=['Guna','gururaj','Bala','Gokul','Karthi'];
// let sum=0;
// for(let i=0;i<friends.length;i++){
//    let name=friends[i];
//    let length=name.length;
//    console.log(name,length);
//    sum=sum+length;
// }
// let average=sum/(friends.length);
// console.log('average length =',average);
// //output;
// /*
//  Guna 4
//  gururaj 7
//  Bala 4
//  Gokul 5
//  Karthi 6
//  average length = 5.2
// */
//---------------------------------------------------------------------------------------------
// // 7. Find the names and return the list starting with letter M.
// let friends=['Guna','Mohan','Bala','Mathi','Karthi','Mathu'];
// let array=[];
// for(let i=0;i<friends.length;i++){
//   let a=friends[i].slice(0,1);
//   if(a=='M'){
//     array.push(friends[i]);
//   }
// }
// console.log(array);
// //output:
// //(3)Â ['Mohan', 'Mathi', 'Mathu']

//---------------------------------------------------------------------------------------------
// // 8. Find the name with max characters and return the name.
// let friends=['Guna','gururaj','Gokul','Karthi'];
// let a=0;
// let result;
// for(let i=0;i<friends.length;i++){
//    let length=friends[i].length;
//    if(a<length){
//      a=length;
//      result=friends[i];
//    } 
// }
// console.log(result);

// //output:
// //gururaj
//---------------------------------------------------------------------------------------------

// 9. Find the name with min characters and return the name.
let friends=['Guna','gururaj','Gokul','Karthi'];
let a=friends[0].length;
let result=friends[0];
for(let i=0;i<friends.length;i++){
   let length=friends[i].length;
   if(a>length){
     a=length;
     result=friends[i];
   } 
}
console.log(result);
//output:
//Guna
//---------------------------------------------------------------------------------------------