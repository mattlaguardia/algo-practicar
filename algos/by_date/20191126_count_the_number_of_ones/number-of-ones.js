const numberOfOnes = (arr) => {
  let amount = 0;

  for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
    if (arr[i] === 1) {
      amount++
    };
  }

  for (let i = arr.length; i >= Math.ceil(arr.length / 2); i--) {
    if (arr[i] === 1) {
      amount++
    };
  }
  return amount;
};

module.exports = numberOfOnes;
