package codeabbey

import (
	"fmt"
	"strings"
)

// https://www.codeabbey.com/index/task_view/matching-brackets

// round (), square [], curly {} and angle <>
func Ca19() {
	values := strings.Split(Cat19, "\n")
	match := map[rune]rune{
		')': '(',
		']': '[',
		'}': '{',
		'>': '<',
	}

	out := []int{}
	for _, chars := range values {
		o := matchStr(chars, match)
		out = append(out, o)
	}
	fmt.Print(out)
}

func matchStr(chars string, match map[rune]rune) int {
	stack := []rune{}
	for _, char := range chars {
		switch char {
		case '(', '[', '{', '<':
			stack = append(stack, char)
		case ')', ']', '}', '>':
			// if last value not match close bracket mismatched
			if len(stack) == 0 || stack[len(stack)-1] != match[char] {
				return 0
			}
			stack = stack[:len(stack)-1]
		}
	}
	if len(stack) == 0 {
		return 1
	}
	return 0
}
