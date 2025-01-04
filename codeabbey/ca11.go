package codeabbey

import (
	"advent/code/util"
	"fmt"
	"strings"
)

func input() string {
	return Cat11
}

// 2025-01-04 15:44:53
// https://www.codeabbey.com/index/task_view/sum-of-digits

func makeRow() (int, [][]int) {
	val := strings.Split(input(), "\n")
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
	n, rows := makeRow()
	var totNum []int
	for i := 0; i < n; i++ {
		sum := sum(rows[i])
		intArr := splitInt(sum)
		totNum = append(totNum, util.SumOfNum(intArr))
	}
	fmt.Print(totNum)
}

func output() {
	Ca11()
}

func sum(values []int) int {
	a, b, c := values[0], values[1], values[2]
	return a*b + c
}

func splitInt(n int) []int {
	slc := []int{}
	for n > 0 {
		slc = append(slc, n%10)
		n = n / 10
	}
	return slc
}
