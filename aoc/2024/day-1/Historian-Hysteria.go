package day1_2024

import (
	"advent/code/util"
	"fmt"
	"log"
	"math"
	"slices"
	"strings"
)

func Historian() {

	buf, err := util.GetFileContents("/2024/day-1/input.txt")
	if err != nil {
		log.Fatal(err)
	}

	var firstCol []int
	var secondCol []int

	item := strings.Split(string(buf[:]), "\n")
	for _, v := range item {
		val := strings.TrimSpace(v)
		cols := strings.Fields(val)

		if len(cols) == 2 {
			col1val := util.StrToInt(cols[0])
			col2val := util.StrToInt(cols[1])
			firstCol = append(firstCol, col1val)
			secondCol = append(secondCol, col2val)
		}

	}

	slices.SortFunc(firstCol, sortMe)
	slices.SortFunc(secondCol, sortMe)

	sum := 0
	for i := 0; i < len(firstCol); i++ {
		sum += int(math.Abs(float64(firstCol[i]) - float64(secondCol[i])))
	}

	fmt.Print(sum)
}

// ans : 2815556

func sortMe(a, b int) int {
	return a - b
}
