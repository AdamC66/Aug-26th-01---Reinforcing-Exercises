function luckyTicket(str){
    let middle = Math.ceil(str.length/2);
    let firstHalf = str.slice(0,middle);
    let secondHalf = str.slice(middle)
    console.log(firstHalf)
    console.log(secondHalf)
    if (!isNaN(str)){
            let sum1 = 0;
            for (let char of firstHalf) {
              sum1 += +char;
            }
            let sum2 = 0;
            for (let char of secondHalf) {
              sum2 += +char;
            }
        if(sum1 === sum2){
            return ("You'e got a lucky ticket!")
        }else{
            return("That's just a regular old ticket")
        }
    }else{
        return "This string is invalid"
    }

}

console.log(luckyTicket('1a23412341'))