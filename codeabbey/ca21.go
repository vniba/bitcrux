package codeabbey

import (
	"advent/code/util"
	"fmt"
	"strings"
)

// https://www.codeabbey.com/index/task_view/array-counters

func Ca21() {

	_, values := util.SplitHeaderAndValue(Cat21)
	hashMap := map[int]int{}
	// Loop through the slice and print each value

	for _, char := range strings.Split(values[0], " ") {
		cChar := util.StrToInt(char)
		if _, exits := hashMap[cChar]; exits {
			hashMap[cChar] = hashMap[cChar] + 1
		} else {
			hashMap[cChar] = 1
		}
	}
	fmt.Print(sortValues(hashMap, 11))
}

func sortValues(values map[int]int, outN int) []int {
	out := []int{}
	for _, v := range values {
		out = append(out, v)
	}
	// sort.Slice(out, func(i, j int) bool {
	// 	return out[i] >= out[j]
	// })
	return out[0:outN]
}

// 35 33 32 32 28 25 24 23 23 21 19
// cor
// 23 19 21 32 28 33 25 35 32 24 23
