import { helper } from '@ember/component/helper';

const eq = ([a, b]) => {
  return a === b;
};

export default helper(eq);

// const validValues = ([args]) => {
//   return args.every((val) => {
//     const initialType = typeof val;
//     if (initialType === 'object' || initialType === 'boolean') return false;
//     const toNum = Number(val);
//     const newType = typeof toNum;
//     if (newType === 'string') return false;
//     return true;
//   });
// };

// export default helper(validValues);
