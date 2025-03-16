package codeabbey

import (
	"advent/code/util"
	"fmt"
)

// https://www.codeabbey.com/index/task_view/weighted-sum-of-digits

func Ca13() {
	_, rows := makeNumRow(Cat13)

	for _, v := range rows {
		var t []int
		for _, num := range v {
			t = append(t, weightedSumOfDigits(util.SplitInt(num)))
		}
		fmt.Print(t)
	}

}

func weightedSumOfDigits(num []int) int {
	s := 0
	for i, v := range num {
		s += ((i + 1) * v)
	}
	return s
}
