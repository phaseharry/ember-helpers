import { helper } from '@ember/component/helper';

const formatNum = ([num]) => {
  const numStr = num.toString();
  let segments = Math.ceil(numStr.length / 3);
  let end = numStr.length;
  const res = [];
  while (segments > 0) {
    console.log(numStr.substring(end - 3, end));
    res.push(numStr.substring(end - 3, end));
    end -= 3;
    segments--;
  }
  return res.reverse().join(',');
};

export default helper(formatNum);
