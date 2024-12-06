package util

import (
	"os"
	"strconv"
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
