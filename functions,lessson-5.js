                                    // normal function
// function praveen() {
//     for (let i = 0; i < 100; i++) {
//         setTimeout(function () {

//             if (i === 10) {

//                 document.body.style.backgroundColor = "red";
//             } else if (i === 30) {

//                 document.body.style.backgroundColor = "blue";
//             } else if (i === 50) {

//                 document.body.style.backgroundColor = "green";
//             } else if (i === 80) {

//                 document.body.style.backgroundColor = "pink";
//             } else {

//                 document.body.style.backgroundColor = "black";
//             }
//         }, i * 100); 
//     }
//  }


//  const nani=Math.random();
//  function siddu() {
//     if (nani>0 && nani<0.3) {
//      document.body.style.backgroundColor="red";
//     }
//      else if (nani>0.3 && nani<0.6){
//         document.body.style.backgroundColor="green";

//     }
//     else if (nani>0.6 && nani<0.9){
//         document.body.style.backgroundColor="pink";

//     }
//     else{
//         document.body.style.backgroundColor="yellow";

//     }
// }

// function nani(){
//     const mamu=document.getElementById("praveen").value;

//     document.body.style.backgroundColor=mamu;
// }
                                          //    Arrow function
// const nani=(x,y)=>{
//    s=(x*y);
//    return `The area of the rectangle is ${s}`;      //use for small functions
//    }

// function raju(x){
//     let siddu=0;

// for (const nani of x) {
// if (nani==="a"||nani==="e"||nani==="i"||nani==="o"||nani==="u"){
//     siddu++
// }  
// }
// console.log(siddu);
// }

// raju("chandu")

// function praveen(x) {
//        siddu=0;
//       for (const chandu of x) {
//        if(chandu==="a"||chandu==="e"||chandu==="i"||chandu==="o"||chandu==="u")

//         siddu++;
//       }
//       console.log(siddu);
// }
// praveen("harish")


// const nani=(x)=>{
//       siddu=0;
//       for (const raju of x) {

//             if(raju==="a"||raju==="e"||raju==="i"||raju==="o"||raju==="u")

//             siddu++;
//           }
//           console.log(siddu);

//     }
//     nani("harish")
                                          //callback function
// let tt=["siddu","kasi","nani"]

// tt.forEach(function(val) {
//       console.log(val.toLowerCase());
// })

// const tt=["siddu","kasi","nani"];

// tt.forEach((val,mm,kk)=>
//       console.log(val,mm,kk)
// )

                                          //practise                                        
// tt=[1,2,3,10]
// tt.forEach((mm,ja,tt) => {
//   t=mm*mm;
//     console.log(t,ja,tt) 
// });
                                    //we can write as
// tt=[1,2,3,10]       return 

// let mani=(t)=>
//       console.log(t*t);


// tt.forEach(mani);

// function raju(x) {
//     chandu=0;
//     for (const siddu of x) {
//         if(siddu==="a"||siddu==="e"||siddu==="i"||siddu==="o"||siddu==="u"){
// chandu++;
     
// console.log(chandu);
//         }
//     }
// }

// raju("harish");


// const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
// console.log(materials.splice(3,0,"nani"));                                   //goes to string and read index values
//   for (const siddu of materials) {
//           console.log(siddu.length);
//   }
// // Expected output: Array [8, 6, 7, 9]

// function doSomething() {
//   console.log(this);
// }
   
// doSomething();

                                                //foreach method

// x=[2,3,5,3,2,4,2,4,45]


// x.forEach((val) => {                         //we can caluculate in strings
//      console.log(val*2)                      

// });
                                                 //map method
// const raju=x.map((val) => {
//   return val*2;                                
// });                                             

// console.log(raju);
// bathi=[1,2,3,4,5]

// const mani=bathi.map((val)=>{                       //it creates new string reference of old string           
//   return val*2;                                      //old string not change
// })
// console.log(mani);

// siddu=["nani","kasi","raju","chandu"]
// const nani=siddu.map((val)=>{

// return val;
// })

// siddu.splice(1,0,"chandu")
// console.log(siddu);
// siddu.splice(3,0,"chandu")
// console.log(siddu);

                                                    //filter method

// arr=[1,2,3,4,5,6,7,8,9,20]



// let raju=arr.filter((val)=>{                        // it filter the values and gives in new array

// return val%2!==0;


// }
// )

                                                     //reduce method
// let nani=[1,3,45,5,4,6]

// let bathi=nani.reduce((val,hh)=>{           // adding

//     return val+hh;
// })

// console.log(bathi);
                                             
// let nani=[9,3,45,5,4,6]                            //it put all string add or any condition it shows 

// let bathi=nani.reduce((val,hh)=>{             //big number 

//     return val<hh ? val : hh;
// })

// console.log(bathi);
// mani=[25,43,24,56]
// let kasi=mani.reduce((val,hh)=>{
//      return val>hh ? val :hh;
// }
// )
// console.log(kasi);

                                                //practise questions

// let marks =[20,40,90,60,93,293,99,109,560]
// marks.push(100,250);
// let output=marks.filter(val=>{
//     return val>=90
// })
// document.write(output);

// let siddu=prompt("enter a number");

// harish=[];
// for(i=1;i<=siddu;i++){

//   harish[i-1]=i;
// }
// console.log(harish);

// raju=harish.map(val => {
//    return (val*2);
// });

// console.log(raju);

// raju.forEach(val => {
//      console.log(val*2)
// });




// let siddu=prompt("enter a number");

// harish=[];
// for(i=1;i<=siddu;i++){

//   harish[i-1]=i;
// }
// console.log(harish);

// raju=harish.reduce((val,nn)=>{
// return (val+nn)
// })
// console.log(raju);

// chandu=harish.reduce((val,nn)=>{
//     return (val*nn)
//     })
//     console.log(chandu);





