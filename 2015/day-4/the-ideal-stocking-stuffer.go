package day4_2015

// 2024-12-27 12:34:08
// https://adventofcode.com/2015/day/4
import (
	"advent/code/util"
	"log"
	"strconv"
	"strings"
)

var zeros = "00000"
var zeros2 = "000000"
var max = 10000000

func Main() int {

	val, err := util.GetFileContents("/2015/day-4/sample.txt")
	if err != nil {
		log.Fatal(err)
	}
	fileContents := strings.TrimSpace(string(val[:]))
	return matchHash(0, max, fileContents, zeros2)

}

// p1 - 609043
// p2 - 9958218
func matchHash(start, end int, str, prefix string) int {

	for i := start; i < end; i++ {

		hash := util.Md5(str + strconv.Itoa(i))

		if strings.HasPrefix(string(hash), prefix) {
			return i
		}
	}
	return 0
}
