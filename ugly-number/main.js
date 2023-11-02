// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.


// 6 
// 1 6
// 2 3


// 14
// 1 14,
// 2 7,


// 18
// 1 18
// 2 9
// 3 6

// 21
// 1 21
// 3 7
// 


// -12
// -12, 1
// -6, 2
// -2, 6
// -1, 12

function isUgly(n) {
  if (n < 1) {
    return false
  }

  if (isPrime(n)) {
    return false
  }
  
  const factors = getFactors(n)
  
  const filtered = factors.filter(x => {
    console.log(`x => `, x)
    return x !== 1 && x !== n
  })
  
  console.log(`FACTORS => `, factors)
  console.log(`<FILTERED> => `, filtered)
  return !filtered.some(x => {
    // is there a number that is not 2, 3, or 5 AND is PRIME

    console.log(`([2, 3, 5].includes(${x}) === false) => `, ([2, 3, 5].includes(x) === false))
    console.log(`isPrime(${x}) => `, isPrime(x))

    return (
      [2, 3, 5].includes(x) === false &&
      isPrime(x)
    )
  });
}

function getFactors(num) {
  let factors = [1, num];

  const isNegitive = num <= 0;

  // force num to be positive, will add negitive factors after all factors have been found
  if (isNegitive) {
    num *= (-1)
  }
  
  const isEven = num % 2 === 0;
  const inc = isEven ? 1 : 2;
  const max = Math.floor(Math.sqrt(num))

  for (let curFactor = isEven ? 2 : 3; curFactor <= max; curFactor += inc) {
    if (num % curFactor !== 0) continue;
    factors.push(curFactor);
    let compliment = num / curFactor;
    if (compliment !== curFactor) factors.push(compliment);
  }

  if (isNegitive) {
    factors.forEach(f => factors.push((f * (-1))))
  }

  return factors.sort((a, b) => a > b ? 1 : (-1));
}

const isPrime = (n) => {
  const fac = getFactors(n)
  return fac[1] === n
}

const r = isUgly(7)
console.log(`r => `, r)


for (let i = 0; i < ; i++) {
  
}