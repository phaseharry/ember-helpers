import { helper } from '@ember/component/helper';

const eq = ([a, b]) => {
  return a === b;
};

export default helper(eq);
