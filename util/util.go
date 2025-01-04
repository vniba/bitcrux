package util

import (
	"crypto/md5"
	"encoding/hex"
	"os"
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
	r, err := strconv.Atoi(val)
	if (err) != nil {
		return 0
	}
	return r
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
