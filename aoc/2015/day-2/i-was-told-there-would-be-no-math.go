package day2_2015

import (
	"advent/code/util"
	"log"
	"math"
	"strings"
)

var baseVal = 2

func Main() int {

	cont, err := util.GetFileContents("/2015/day-2/sample.txt")
	if err != nil {
		log.Fatal(err)
	}
	slice2d := make2DSlice(cont)
	total := 0
	for _, row := range slice2d {
		total += calculateAreas(row)
	}
	return total
}

func make2DSlice(contents []byte) [][]int {
	var slice [][]int

	fileContents := strings.Split(string(contents[:]), "\n")
	for _, str := range fileContents {
		trimmed := strings.TrimSpace(str)
		line := strings.Split(strings.TrimSpace(trimmed), "x")
		if len(line) == 1 {
			continue
		}
		var row []int
		for _, val := range line {
			row = append(row, util.StrToInt(val))
		}
		slice = append(slice, row)
	}
	return slice
}

func calculateAreas(areas []int) int {
	totalSqFt := 0
	smallArea := math.MaxInt

	for i := 0; i < len(areas); i++ {
		for j := i + 1; j < len(areas); j++ {
			t := areas[i] * areas[j]
			if t < smallArea {
				smallArea = t
			}
			totalSqFt += t * baseVal

		}
	}
	return totalSqFt + smallArea
}

// ans:1598415
