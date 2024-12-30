'use strict';

/* <p>If we list all the natural numbers below $10$ that are multiples of $3$ or $5$, we get $3, 5, 6$ and $9$. The sum of these multiples is $23$.</p>
<p>Find the sum of all the multiples of $3$ or $5$ below $1000$.</p>
 */

const limit = 1000;
function main() {
  let tt = 0;
  for (let i = 1; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      tt += i;
    }
  }
  console.log(tt);
}
//ans- 233168
main();
