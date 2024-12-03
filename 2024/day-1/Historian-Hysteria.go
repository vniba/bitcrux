package day1_2024

import (
	"fmt"
	"log"
	"math"
	"os"
	"slices"
	"strconv"
	"strings"
)

func Historian() {
	p, err := os.Getwd()
	if err != nil {
		log.Fatal(err)
	}
	filePath := p + "/2024/day-1/input.txt"
	buf, err := os.ReadFile(filePath)
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
			col1val := strToInt(cols[0])
			col2val := strToInt(cols[1])
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

func strToInt(val string) int {
	r, err := strconv.Atoi(val)
	if (err) != nil {
		return 0
	}
	return r
}

func sortMe(a, b int) int {
	return a - b
}
