package codeabbey

import (
	"fmt"
	"math/big"
)

// https://www.codeabbey.com/index/task_view/square-root

func Ca18() {
	count, values := makeNumRow(Cat18)
	// r := 1
	for i := range count {
		c := values[i][1]
		if c == 0 {
			c = 1
		}
		approx(float64(values[i][0]), c)
	}
}

/* r = 1

d = 10 / 1 = 10
abs(r - d) = abs(1 - 10) = 9   - difference is bit too much still
(r + d) / 2 = (1 + 10) / 2 = 5.5
let r = 5.5

d = 10 / 5.5 = 1.8182
abs(r - d) = abs(5.5 - 1.8182) = 3.6818   - again too much, let us proceed
(r + d) / 2 = (5.5 + 1.8182) / 2 = 3.6591
let r = 3.6591

d = 10 / 3.6591 = 2.7329
abs(r - d) = abs(3.6591 - 2.7329) = 0.9262   - it become less than 1, let us do the one step more
(r + d) / 2 = (3.6591 + 2.7329) / 2 = 3.196
let r = 3.196 */

func approx(d float64, count int) {
	nr := big.NewFloat(1)
	two := big.NewFloat(2)
	nd := big.NewFloat(d).SetPrec(128)

	var out []string

	for range count {
		nd2 := nd.Quo(nd, nr)
		dif := new(big.Float).Abs(new(big.Float).Sub(nr, nd2))
		nr = nr.Add(nr, nd2).Quo(nr, two)
		o := fmt.Sprintf("%f", dif)
		fmt.Print(nr)
		out = append(out, o)
	}
	fmt.Print(out, "out")
}

// 4264550%
