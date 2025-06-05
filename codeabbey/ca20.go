package codeabbey

import (
	"fmt"
	"strings"
)

// https://www.codeabbey.com/index/task_view/vowel-count

func Ca20() {
	match := map[rune]rune{
		'a': 'a', 'o': 'o', 'u': 'u', 'i': 'i', 'y': 'y', 'e': 'e',
	}
	values := strings.Split(Cat20, "\n")
	out := map[int]int{}
	for i, chars := range values {
		for _, v := range chars {
			if _, exists := match[v]; exists {
				out[i] = out[i] + 1
			}
		}
	}
	fmt.Println(out)
}
