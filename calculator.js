let flag = false;
const limit = 10000;
let counterexample = false;

const numberfunc = (num) => {
  while (flag === false) {
    if (num === 1) {
      flag = true;
    } else if (num % 2 === 0) {
      num /= 2;
    } else {
      num *= 3;
      num ++;
    }
  }
  return num;
};

const calcuration = () => {
  for (let i=1; i <= limit; i++) {
    const result = numberfunc(i);
    if (flag === true) {
      console.log(`Result:${i} => ${result}`);
      const resultNumber = `Result:${i} => ${result}`;
      document.getElementById('number_area').innerHTML = resultNumber;
      flag = false;
    } else {
      console.log(`counterexample occurred. number : ${i}`);
      counterexample = true;
    }
  }

  if (counterexample === true) {
    console.log("例外が発生しました！");
    document.getElementById('result_area').innerHTML = "例外が発生しました！" ;
  } else {
    console.log("予想は成立しました。");
    document.getElementById('result_area').innerHTML = "予想は成立しました。" ;
  }  
};
