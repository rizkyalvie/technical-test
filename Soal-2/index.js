const sortNumbers = (array) => {
    for (let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}

let randomNumber = [20, 12, 35, 11, 17, 9, 58, 23, 69, 21]
    let sortedArray = sortNumbers(randomNumber)
    return console.log(sortedArray)