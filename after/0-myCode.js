// const obj = {
//     name : 'benyamin' , 
//     age : 24 ,
//     isMale: true,
//     rolesInAps : [
//         'mentor for class b' ,
//         'nothing else'
//     ] ,
//     classBStudents:{
//         1 : 'motahare' ,
//         2: 'mohammadhossein' , 
//         3: 'arad'
//     }
// }




// ///////////////////

// const arr = [1,2,3];

// arr.map(ele => ele**2)
//     .filter(ele => ele > 2);



//    NEMISHEEEEEEEEEEEEHHHHH
    // const arad = 'radius';
    // const circle ={
    //     label : 'Circlex',
    //     [arad]:32,
    // }
    
    
    // const { label , [arad] } = circle



// const asghar ={
//     name :'asgharSagSibil' , 
//     familyName : 'zakhmKhorderh' , 
//     age: 35,
//     isMale : 'soTrue'
// }

// asghar.name = 'kamran'

// console.log(asghar)



// const moragheyer = 'name'
// asghar[moragheyer]



const numbers  = [1 , 2 , 3]

const fun = numbers.map(function( element ){
    return  element**2
})

const fun1 = numbers.map( element => element**2)

// console.log(fun1)

// numbers.forEach(ele => console.log(ele + 10))


const fun2 = numbers.filter(ele => ele >= 2)

// console.log(fun2)

//  numbers.reduce((acc , cur) =>{
//     console.log('acc: ' , acc)
//     console.log('cur: ' , cur)
//     let result =  acc + cur
//     console.log('result:' , result )
//     // return result
// })

// setTimeout( ()=>{
//     console.log('hi')
// }  , 5000  )

let i = 0
setInterval( () =>{
    console.log(i++)
} , 2000) 

