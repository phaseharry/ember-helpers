import Component from '@glimmer/component';

export default class BaseAssignmentComponent extends Component {
  allNums = [10, 2, 6, 8, 1, -5, 23, -100, 45, 7];
  notAllNums = [10, 2, -6, 8, 1, null, 23, -46, false, 7];

  constructor() {
    super(...arguments);
  }
}
