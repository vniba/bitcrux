
type TestCase = {
  nums: number[];
  target: number;
  expected: number;
}
export function test(fn, testCases: TestCase[], testNum?: number, showPassed = false) {
  let failed = 0;

  testCases.forEach(({ nums, target, expected }, i) => {
    const isNotNeededToRun = testNum && testNum != i + 1

    if (!isNotNeededToRun) {
      const result = fn(nums, target);
      const pass = result === expected;
      if (!pass || showPassed) {
        const mark = pass ? "✅" : "❌";
        console.log(
          `${mark} Test ${i + 1}: searchInsert(${JSON.stringify(nums)}, ${target}) = ${result} (expected: ${expected})`
        );
      }
      if (!pass) failed++;
    }

  });

  const total = testNum ? 1 : testCases.length;
  console.log(`\nTotal: ${total} | ✅ Passed: ${total - failed} | ❌ Failed: ${failed}`);
}
