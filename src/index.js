import './index.css';

import numeral from 'numeral';
// debugger;
const courseValue = numeral(1000).format('$0,0.00');
/*eslint-disable no-console*/
console.log(`I would pay ${courseValue} for this awesome course!`);
