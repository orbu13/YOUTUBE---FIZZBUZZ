// First example 

function fizzBuzz(num){
    for (let i = 1; i <= num; i++){
        if (i % 2 === 0 && i % 3 === 3) console.log("FizzBuzz");
        else if(i % 3 === 0) console.log("Buzz");
        else if( i % 2 === 0) console.log("Fizz");
        else console.log(i);
    }
}

// Second example

for (let o = 1; o <= 100; o++){
    if (o % 2 && o % 3 === 3) console.log("FIZZ");
    else if(o % 3 === 0) console.log("BUZZ");
    else if(o % 2 === 0 ) console.log("FIIZBUZZ");
    else console.log(o);
}
console.log(o);