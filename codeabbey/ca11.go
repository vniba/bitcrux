package codeabbey

import (
	"advent/code/util"
	"fmt"
	"strings"
)

// 2025-01-04 15:44:53
// https://www.codeabbey.com/index/task_view/sum-of-digits

func makeNumRow(str string) (int, [][]int) {
	val := strings.Split(str, "\n")
	n := 0
	var arr = make([][]int, 0)
	for i, v := range val {
		val := strings.TrimSpace(v)
		cols := strings.Fields(val)
		if i == 0 {
			n = util.StrToInt(cols[0])
		} else {
			arr = append(arr, util.StrArrToIntArr(cols))
		}
	}

	return n, arr
}

func Ca11() {
	n, rows := makeNumRow(Cat11)
	var totNum []int
	for i := 0; i < n; i++ {
		sum := sum(rows[i])
		intArr := util.SplitInt(sum)
		totNum = append(totNum, util.SumOfNum(intArr))
	}
	fmt.Print(totNum)
}

func sum(values []int) int {
	a, b, c := values[0], values[1], values[2]
	return a*b + c
}
