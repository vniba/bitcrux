package codeabbey

import (
	"advent/code/util"
	"fmt"
	"math"
)

// https://www.codeabbey.com/index/task_view/average-of-array

func Ca16() {
	_, values := makeNumRow(Cat16)

	var avg []float64
	for _, arr := range values {
		curAvg := float64(util.SumOfNum(arr)) / float64((len(arr) - 1))
		avg = append(avg, math.Round(curAvg))
	}
	fmt.Print(avg)

}

// 2069 1099 4330 6422 136 2869 86 7865 629 470 1913 4505 2680
