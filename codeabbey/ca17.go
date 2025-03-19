package codeabbey

import (
	"fmt"
	"math/big"
)

// https://www.codeabbey.com/index/task_view/array-checksum

// seed: 113
// limit: 10000007
func Ca17() {
	_, values := makeNumRow(Cat17)

	seed := big.NewInt(113)
	limit := big.NewInt(10000007)
	result := big.NewInt(0)
	for _, val := range values[0] {
		nV := big.NewInt(int64(val))
		// *(result +val) * seed )% limit
		(result.Add(result, nV)).Mul(result, seed).Mod(result, limit)
	}

	fmt.Print(result)

}

// 4264550%
