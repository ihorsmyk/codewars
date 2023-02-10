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

