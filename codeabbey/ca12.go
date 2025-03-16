package codeabbey

import "fmt"

// 2025-01-04 19:19:10
// https://www.codeabbey.com/index/task_view/modulo-and-time-difference
func Ca12() {
	n, rows := makeNumRow(Cat12)

	// min := 60

	for i := 0; i < n; i++ {
		r := rows[i]
		// day1, hour1, min1, sec1, day2, hour2, min2, sec2 := r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7]
		fmt.Print(r)
	}

}
