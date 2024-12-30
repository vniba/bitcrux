package day8_2015

import (
	"advent/code/util"
	"fmt"
	"strconv"
	"strings"
)

func unQuote(str string) string {
	s, _ := strconv.Unquote(str)
	return s
}

func quote(str string) string {
	return strconv.Quote(str)

}

func Main() int {
	buf, err := util.GetFileContents("/2015/day-8/sample.txt")
	if err != nil {
		fmt.Printf("Error unquoting string: %v\n", err)
	}

	values := strings.Split(string(buf), "\n")

	stringLen := 0
	p1StringLen := 0
	p2StringLen := 0
	for _, val := range values {
		nV := strings.TrimSpace(val)
		stringLen += len(nV)
		p1StringLen += len(unQuote(nV))
		p2StringLen += len(quote(nV))
	}

	fmt.Println("Difference:p1", stringLen-p1StringLen)
	fmt.Println("Difference:p2", stringLen-p2StringLen)
	return stringLen - p2StringLen
}
