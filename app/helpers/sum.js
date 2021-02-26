import { helper } from '@ember/component/helper';

const sum = (args) => {
  const validAddends = args.every((val) => !isNaN(Number(val)));
  if (!validAddends) return new Error('NOT ALL VALUES ARE NUMBERS');
  return args.reduce((sum, val) => sum + val, 0);
};

export default helper(sum);
