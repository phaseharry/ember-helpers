import { helper } from '@ember/component/helper';

const gte = ([a, b]) => {
  return a >= b;
};

export default helper(gte);
