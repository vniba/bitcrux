package codeabbey

import (
	"advent/code/util"
	"fmt"
	"math"
	"strings"
)

// https://www.codeabbey.com/index/task_view/maximum-of-array

func Ca15() {
	values := strings.Split(Cat15, " ")

	var max float64
	min := math.MaxFloat64
	for _, v := range values {
		curVal := util.StrToFloat(v)
		max = math.Max(max, curVal)
		min = math.Min(min, curVal)

	}
	fmt.Print(max, min)

}

// 79702 -79643
