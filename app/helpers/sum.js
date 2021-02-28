import { helper } from '@ember/component/helper';

const sum = ([args]) => {
  const validAddends = args.every((val) => {
    const initialType = typeof val;
    if (initialType === 'object' || initialType === 'boolean') return false;
    const toNum = Number(val);
    const newType = typeof toNum;
    if (newType === 'string') return false;
    return true;
  });
  if (!validAddends) return 'NOT ALL VALUES ARE NUMBERS';
  return args.reduce((sum, val) => sum + val, 0);
};

export default helper(sum);
