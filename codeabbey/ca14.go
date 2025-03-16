package codeabbey

import (
	"advent/code/util"
	"fmt"
	"math/big"
	"strings"
)

// https://www.codeabbey.com/index/task_view/modular-calculator

func splitToRow(str string) [][]string {
	val := strings.Split(str, "\n")
	var arr = make([][]string, 0)
	for _, v := range val {
		val := strings.TrimSpace(v)
		cols := strings.Fields(val)
		arr = append(arr, cols)

	}
	return arr
}

var add = "+"
var mul = "*"
var mod = "%"

func Ca14() {
	rows := splitToRow(Cat14)
	total := big.NewInt(0)

	for i, v := range rows {
		if i == 0 {
			total = util.StrToBigInt(v[0])
		} else {
			num := util.StrToBigInt(v[1])
			switch v[0] {
			case add:
				total.Add(total, num)
			case mul:
				total.Mul(total, num)
			case mod:
				total.Mod(total, num)
			}
		}
	}
	fmt.Print(total)

}

// 2496
