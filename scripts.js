/*4 kyu
 Human readable duration format */
function formatDuration(seconds) {
  // Complete this function
  if (seconds === 0) return 'now';

  const YEAR = 31536000,
    DAY = 86400,
    HOUR = 3600,
    MINUTE = 60;

  let resArr = [];

  if (seconds >= YEAR) {
    resArr.push(`${Math.floor(seconds / YEAR)} year`);
    seconds %= YEAR;
  }
  if (seconds >= DAY) {
    resArr.push(`${Math.floor(seconds / DAY)} day`);
    seconds %= DAY;
  }
  if (seconds >= HOUR) {
    resArr.push(`${Math.floor(seconds / HOUR)} hour`);
    seconds %= HOUR;
  }
  if (seconds >= MINUTE) {
    resArr.push(`${Math.floor(seconds / MINUTE)} minute`);
    seconds %= MINUTE;
  }
  if (seconds > 0) {
    resArr.push(`${seconds} second`);
  }

  resArr = resArr.map(el => (parseInt(el) > 1 ? (el += 's') : el));

  switch (resArr.length) {
    case 1:
      return resArr[0];
    case 2:
      return `${resArr[0]} and ${resArr[1]}`;
    case 3:
      return `${resArr[0]}, ${resArr[1]} and ${resArr[2]}`;
    case 4:
      return `${resArr[0]}, ${resArr[1]}, ${resArr[2]} and ${resArr[3]}`;
    case 5:
      return `${resArr[0]}, ${resArr[1]}, ${resArr[2]}, ${resArr[3]} and ${resArr[4]}`;
  }
}
// console.log(formatDuration(0));
// console.log(formatDuration(62));
// console.log(formatDuration(34564));
// console.log(formatDuration(1234567890));

/*6 kyu
Happy numbers */
function isHappy(n) {
  // Good Luck
  let res = true;
  const testNumber = n => {
    let num = n
      .toString()
      .split('')
      .reduce((prev, el) => prev + el ** 2, 0);

    if (num !== 1) {
      testNumber(num);
    } else {
      return;
    }
  };

  try {
    testNumber(n);
  } catch (err) {
    res = false;
  }
  return res;
}
// console.log(isHappy(3));
// console.log(isHappy(7));
// console.log(isHappy(16));

/* 7 kyu
Isograms*/
function isIsogram(str) {
  //...
  const arrTest = str
    .toLowerCase()
    .split('')
    .filter((el, i, arr) => arr.indexOf(el) === i);
  return arrTest.length === str.length;
}
// console.log(isIsogram('Dermatoglyphics'));
// console.log(isIsogram('moose'));
// console.log(isIsogram('aba'));

/**7 kyu
Is this a triangle? */
function isTriangle(a, b, c) {
  const arr = [...arguments].sort((a, b) => b - a);
  return arr[0] < arr[1] + arr[2];
}
// console.log(isTriangle(2, 2, 2));
// console.log(isTriangle(7, 2, 2));

/**6 kyu
Hamming Distance */
function hamming(a, b) {
  // Implement me!
  let res = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      res++;
    }
  }
  return res;
}
// console.log(hamming('I like turtles', 'I like turkeys'));
// console.log(hamming('Hello World', 'Hello World'));
// console.log(hamming('hello world', 'hello tokyo'));

/**7 kyu
Get the Middle Character */
function getMiddle(s) {
  //Code goes here!
  return s.length % 2 === 0 ? `${s[s.length / 2 - 1]}${s[s.length / 2]}` : `${s[Math.floor(s.length / 2)]}`;
}
// console.log(getMiddle('test'));
// console.log(getMiddle('testing'));
// console.log(getMiddle('middle'));
// console.log(getMiddle('A'));

/**6 kyu
Build Tower */
function towerBuilder(nFloors) {
  // build here
  const res = [];
  for (let i = 1; i <= nFloors; i++) {
    const ast = '*'.repeat(i * 2 - 1);
    const spc = ' '.repeat(nFloors - i);
    res.push(spc + ast + spc);
  }
  return res;
}
// console.log(towerBuilder(3));
// console.log(towerBuilder(5));

/**6 kyu
Two Sum */
function twoSum(numbers, target) {
  // ...
  const res = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        res.push(i);
        res.push(j);
        return res;
      }
    }
  }
}
// console.log(twoSum([1, 2, 3], 4));

/**7 kyu
Sum The Array */
Array.prototype.sum = function () {
  return this.reduce((pr, el) => pr + el, 0);
};
// console.log([1, 3, 6].sum());
