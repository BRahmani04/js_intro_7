// const getDuplicates = (arr) => {

//     let duplicatedElements = [];
    
//     for(let i = 0; i < arr.length; i++) {
//      for(let j = 0; j < arr.length; j++) {
//     if(arr[i] === arr[j]) duplicatedElements.push(arr[i])
//         }
//     }
    
//     return duplicatedElements
// }


//     console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])  )                   -
//     console.log(getDuplicates([ 1, 2, 5, 0, 7 ]))                                
//     console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]))     
    

const getDuplicates2 = (arr) => {

    let duplicates = [];
    let seen = new Set()

    for(let item of arr) {
        if(seen.has(item) && !duplicates.includes(item)) {
            duplicates.push(item)
        }
        else {
            seen.add(item)
        }
    }

    return duplicates
}

    console.log(getDuplicates2([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])  )                   -
    console.log(getDuplicates2([ 1, 2, 5, 0, 7 ]))                                
    console.log(getDuplicates2([ 'foo', '12' , 12, 'bar', 'a', 'foo' ]))     

