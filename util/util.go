package util

import (
	"crypto/md5"
	"encoding/hex"
	"math/big"
	"os"
	"slices"
	"strconv"
	"strings"
)

func GetFileContents(filePath string) ([]byte, error) {
	p, err := os.Getwd()
	if err != nil {
		return nil, err
	}
	path := p + filePath
	return os.ReadFile(path)
}

func StrToInt(val string) int {
	r, err := strconv.Atoi(strings.TrimSpace(val))
	if (err) != nil {
		return 0
	}
	return r
}

func StrToFloat(val string) float64 {
	r, err := strconv.ParseFloat(strings.TrimSpace(val), 64)
	if (err) != nil {
		return 0
	}
	return r
}

func StrToBigInt(s string) *big.Int {
	num := new(big.Int)
	num, ok := num.SetString(strings.TrimSpace(s), 10)
	if !ok {
		return big.NewInt(0)
	}
	return num
}

func StrArrToIntArr(val []string) []int {
	var i []int
	for _, v := range val {
		i = append(i, StrToInt(v))
	}
	return i
}

func SumOfNum(val []int) int {
	t := 0
	for _, v := range val {
		t += v
	}
	return t
}

func FileContentsToSingleValue(contents []byte) string {
	return strings.Join(strings.Split(string(contents[:]), "\n"), "")
}

func Md5(val string) string {
	h := md5.New()
	h.Write([]byte(val))
	return hex.EncodeToString(h.Sum(nil))
}

func SplitInt(n int) []int {
	slc := []int{}
	for n > 0 {
		slc = append(slc, n%10)
		n = n / 10
	}
	slices.Reverse(slc)
	return slc
}
