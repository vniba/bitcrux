package day2_2024

import (
	"advent/code/util"
	"log"
	"strings"
)

func RedNosedReports() int {
	buf, err := util.GetFileContents("/2024/day-2/sample.txt")
	if err != nil {
		log.Fatal(err)
	}

	slice := create2DSlice(buf)
	count := 0

	for _, row := range slice {
		safePos := map[int]int{1: 1, 2: 2, 3: 3}
		safeNeg := map[int]int{-1: -1, -2: -2, -3: -3}
		partOne(row, safePos, safeNeg)
		if isSafe(safePos, safeNeg) {
			count += 1
		} else {
			count += partTwo(row)
		}
	}

	return count
}

func partOne(row []int, safePos map[int]int, safeNeg map[int]int) {
	for i := 0; i < len(row)-1; i++ {
		item := row[i] - row[i+1]
		safePos[item] = item
		safeNeg[item] = item
	}
}

func partTwo(row []int) int {
	count := 0
	compSlice := createCombination(row)

	for _, nRow := range compSlice {
		safePos := map[int]int{1: 1, 2: 2, 3: 3}
		safeNeg := map[int]int{-1: -1, -2: -2, -3: -3}
		for i := 0; i < len(nRow)-1; i++ {
			item := nRow[i] - nRow[i+1]
			safePos[item] = item
			safeNeg[item] = item
		}
		if isSafe(safePos, safeNeg) {
			count += 1
			break
		}
	}
	return count
}

// ans p1: 680
// ans p2: 710

func create2DSlice(buf []byte) [][]int {
	var vals [][]int
	fileContents := strings.Split(string(buf[:]), "\n")

	for _, v := range fileContents {
		line := strings.TrimSpace(v)
		items := strings.Fields(line)
		var numCol []int
		for _, col := range items {
			numCol = append(numCol, util.StrToInt(col))
		}

		if len(line) > 0 {
			vals = append(vals, numCol)
		}
	}
	return vals
}

func isSafe(safePos map[int]int, safeNeg map[int]int) bool {
	return len(safePos) == 3 || len(safeNeg) == 3
}

func createCombination(arr []int) [][]int {
	var comp [][]int

	for i := 0; i < len(arr); i++ {
		comp = append(comp, toSpliced(i, arr))
	}

	return comp
}

func toSpliced(index int, slice []int) []int {
	var nSlice []int
	for i, v := range slice {
		if i != index {
			nSlice = append(nSlice, v)
		}
	}
	return nSlice
}
