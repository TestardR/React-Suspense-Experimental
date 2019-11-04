import React from 'react';

const BigPrime = ({ n }) => {
  let biggestPrime = 2;
  let maxIterations = 1000000;

  for (let i = 2; i < n; i++) {
    let isPrime = true;
    for (let k = 2; k < i; k++) {
      if (i % k === 0) {
        isPrime = false;
      }
      maxIterations -= 1;
    }

    if (isPrime) {
      biggestPrime = i;
    }
    if (maxIterations < 0) {
      break;
    }
  }

  return (
    <div>
      biggest prime less than {n} is {biggestPrime}
    </div>
  );
};

export default BigPrime;
